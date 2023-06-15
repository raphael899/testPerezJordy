using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace test.Models
{
    public class Eventos
    {
        [ReadOnly(true)]
        public int Id { get; set; }

        public string NombreInstitucion { get; set; }

        public string DireccionInstitucion { get; set; }

        public int NumeroAlumnos { get; set; }

        public DateTime HoraInicio { get; set; }

        [ReadOnly(true)]
        public decimal ValorServicio { get; set; }

        [NotMapped]
        public bool AgregarTogaBirrete { get; set; }

    }

}

