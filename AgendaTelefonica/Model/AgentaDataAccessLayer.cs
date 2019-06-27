using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AgendaTelefonica.Model
{
    public class AgentaDataAccessLayer
    {
          
        public IEnumerable<Persona> getAllPersona()
        {
            try
            {
                
                using (var db = new AgendaTelelefonicaContext())
                {
                    return db.Personas.ToList();
                }

               
            }
            catch
            {
                throw;
            }
        }
        public int Create(Persona p)
        {
            int inserterd=0;
            using (var db = new AgendaTelelefonicaContext())
            {
                db.Add(p);
                inserterd=db.SaveChanges();
            }

            return inserterd; 
        }

        public int DeleltePersonabyId(int IdNombre)
        {
            int deleted = 0;
            using (var db = new AgendaTelelefonicaContext())
            {
                Persona customer = new Persona() { IdNombre = IdNombre };
                db.Personas.Attach(customer);
                db.Personas.Remove(customer);
                deleted = db.SaveChanges();
            }

            return deleted;
        }
        public int DelelteDatobyId(int IdDatos)
        {
            int deleted = 0;
            using (var db = new AgendaTelelefonicaContext())
            {
                Dato customer = new Dato() { IdDatos = IdDatos };
                db.Datos.Attach(customer);
                db.Datos.Remove(customer);
                deleted = db.SaveChanges();
            }

            return deleted;
        }

        public int Create(Dato p)
        {
            int inserterd = 0;
            using (var db = new AgendaTelelefonicaContext())
            {
                db.Add(p);
                inserterd = db.SaveChanges();
            }

            return inserterd;
        }

        public int DeleltebyIdIdDatos(int IdDatos)
        {
            int deleted = 0;
            using (var db = new AgendaTelelefonicaContext())
            {
                Dato customer = new Dato() { IdDatos = IdDatos };
                db.Datos.Attach(customer);
                db.Datos.Remove(customer);
                deleted = db.SaveChanges();
            }

            return deleted;
        }

        public IEnumerable<Dato> getAllDato()
        {
            try
            {

                using (var db = new AgendaTelelefonicaContext())
                {
                    return db.Datos.ToList();
                }


            }
            catch
            {
                throw;
            }
        }

    }
}
   