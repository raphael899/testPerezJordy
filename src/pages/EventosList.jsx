import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './styles/eventosList.css';

const EventosList = () => {
  const [eventos, setEventos] = useState([]);
  const [nombreInstitucion, setNombreInstitucion] = useState('');
  const [direccionInstitucion, setDireccionInstitucion] = useState('');
  const [numeroAlumnos, setNumeroAlumnos] = useState(0);
  const [horaInicio, setHoraInicio] = useState('');
  const [agregarTogaBirrete, setAgregarTogaBirrete] = useState(false);
  const baseUrl = 'https://localhost:7047/api';
  const imeiUrl = 'https://api.iotsol.net/api/GetIMEIDataServicesBy|MEIAndCompany';

  useEffect(() => {
    fetchEventos();
    fetchImeiData();
  }, []);

  const fetchEventos = async () => {
    try {
      const response = await axios.get(`${baseUrl}/eventos`);
      setEventos(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const fetchImeiData = async () => {
    try {
      const requestData = {
        IMEI: '354330030646882',
        CompanyID: 10
      };
      const response = await axios.post(imeiUrl, requestData);
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  };

  const agregarEvento = async (e) => {
    e.preventDefault();

    if (!nombreInstitucion || !direccionInstitucion || !numeroAlumnos || !horaInicio) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    const nuevoEvento = {
      NombreInstitucion: nombreInstitucion,
      DireccionInstitucion: direccionInstitucion,
      NumeroAlumnos: numeroAlumnos,
      HoraInicio: horaInicio,
      AgregarTogaBirrete: agregarTogaBirrete
    };

    try {
      const response = await axios.post(`${baseUrl}/eventos`, nuevoEvento);
      console.log(response.data);
      fetchEventos();
      limpiarFormulario();
    } catch (error) {
      console.error(error);
    }
  };

  const limpiarFormulario = () => {
    setNombreInstitucion('');
    setDireccionInstitucion('');
    setNumeroAlumnos(0);
    setHoraInicio('');
    setAgregarTogaBirrete(false);
  };

  const obtenerHora = (fechaCompleta) => {
    const fecha = new Date(fechaCompleta);
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    return `${hora}:${minutos < 10 ? '0' + minutos : minutos}`;
  };

  return (
    <div className="eventos-list-container">
      <h1>Lista de Eventos</h1>

      <div className="agregar-evento-container">
        <h2>Agregar Evento</h2>
        <form onSubmit={agregarEvento}>
          <label>Nombre Institución:</label>
          <input
            type="text"
            value={nombreInstitucion}
            onChange={(e) => setNombreInstitucion(e.target.value)}
          />

          <label>Dirección Institución:</label>
          <input
            type="text"
            value={direccionInstitucion}
            onChange={(e) => setDireccionInstitucion(e.target.value)}
          />

          <label>Número de Alumnos:</label>
          <input
            type="number"
            value={numeroAlumnos}
            onChange={(e) => setNumeroAlumnos(parseInt(e.target.value))}
          />

          <label>Hora de Inicio:</label>
          <input
            type="datetime-local"
            value={horaInicio}
            onChange={(e) => setHoraInicio(e.target.value)}
          />

          <label>
            <input
              type="checkbox"
              checked={agregarTogaBirrete}
              onChange={(e) => setAgregarTogaBirrete(e.target.checked)}
            />
            Agregar Toga y Birrete
          </label>

          <button type="submit">Agregar</button>
        </form>
      </div>

      <table className="eventos-table">
        <thead>
          <tr>
            <th>Nombre Institución</th>
            <th>Dirección Institución</th>
            <th>Número de Alumnos</th>
            <th>Hora de Inicio</th>
            <th>Valor de Servicio</th>
          </tr>
        </thead>
        <tbody>
          {eventos.map((evento) => (
            <tr key={evento.id}>
              <td>{evento.nombreInstitucion}</td>
              <td>{evento.direccionInstitucion}</td>
              <td>{evento.numeroAlumnos}</td>
              <td>{obtenerHora(evento.horaInicio)}</td>
              <td>{evento.valorServicio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventosList;
