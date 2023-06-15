using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using test.Models;
using test.Context;
using Microsoft.EntityFrameworkCore;




// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace test.Controllers
{

    [ApiController]
    [Route("api/eventos")]
    public class EventosController : ControllerBase
    { 
        private readonly ConexionSqlServer context;
        public EventosController(ConexionSqlServer context)
        {
            this.context = context;
        }

        [HttpGet]
        public IEnumerable<Eventos> Get()
        {
            try
            {
                return context.Eventos.ToList();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error al obtener los eventos: {ex.Message}");
                return Enumerable.Empty<Eventos>();
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] Eventos evento)
        {
            try
            {
                // Calcular el valor del servicio
                decimal valorServicio = 200; // Valor base

                if (evento.AgregarTogaBirrete)
                {
                    valorServicio += 20 * evento.NumeroAlumnos;
                }

                // Crear un nuevo objeto Eventos con los datos recibidos
                var nuevoEvento = new Eventos
                {
                    NombreInstitucion = evento.NombreInstitucion,
                    DireccionInstitucion = evento.DireccionInstitucion,
                    NumeroAlumnos = evento.NumeroAlumnos,
                    HoraInicio = evento.HoraInicio,
                    ValorServicio = valorServicio
                };

                Console.WriteLine(nuevoEvento);

                context.Eventos.Add(nuevoEvento);
                context.SaveChanges();

                return Ok(nuevoEvento);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



    }
}

