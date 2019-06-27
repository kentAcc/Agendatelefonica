using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AgendaTelefonica.Model
{
    public class AgendaTelelefonicaContext : DbContext
    {

        private readonly DbContextOptions _contextOptions;
        
        public DbSet<Persona> Personas { get; set; }
        public DbSet<Dato> Datos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=AgendaTelefonica;Trusted_Connection=True;");
        }

    }

    

    public class Persona
    {
        [Key]
        public int IdNombre { get; set; }
        public string Nombre { get; set; }

        public string Correo { get; set; }

    }

    public class Dato
    {
        [Key]
        public int IdDatos{ get; set; }
        public string Area { get; set; }
        public string TelefonoLocal { get; set; }
        public string Celular{ get; set; }

    }
}


