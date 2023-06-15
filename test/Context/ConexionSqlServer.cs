using System;
using Microsoft.EntityFrameworkCore;
using test.Models;

namespace test.Context
{
	public class ConexionSqlServer: DbContext
    {
        public ConexionSqlServer(DbContextOptions<ConexionSqlServer> options)
       : base(options)
        {


        }

        public DbSet<Eventos> Eventos { get; set; } = null!;
    }
}

