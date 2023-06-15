import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./styles/eventosList.css";

const ApiCosumo = () => {
  const [data, setData] = useState([]);
  const imeiUrl = 'https://api.iotsol.net/api/GetIMEIDataServicesByIMEIAndCompany';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const requestData = {
        IMEI: '354330030646882',
        CompanyID: 10
      };

      const response = await axios.post(imeiUrl, requestData);
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="eventos-list-container">
      <h1>Vista de Consumo de API</h1>

      <table className="eventos-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Valor</th>
            <th>Otro Campo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.valor}</td>
              <td>{item.otroCampo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApiCosumo;
