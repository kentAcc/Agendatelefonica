using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using AgendaTelefonica.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AgendaTelefonica.Controllers
{
    [Route("api/[controller]/[action]")]

    public class PersonaController : Controller
    {

        AgentaDataAccessLayer a = new AgentaDataAccessLayer();

        [HttpGet]
        /* [AllowAnonymous]*/
     
        [EnableCors("AllowAnyOrigin")]
        public IEnumerable<Persona> Index(string Nombre)
        {
            return a.getAllPersona(Nombre);
        }
        [HttpGet]
        /* [AllowAnonymous]*/
        [EnableCors("AllowAnyOrigin")]
        public IEnumerable<Persona> Indexall()
        {
            return a.getAllPersonaall();
        }

        [HttpPost]

        public int Create([FromBody]Persona persona)
        {
            return a.Create(persona);
        }

        [HttpDelete("{id}")]
        public int Delete(int id)
        {
            return a.DeleltePersonabyId(id);
        }

        /*
    // GET api/<controller>/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
        return "value";
    }

    // POST api/<controller>
    [HttpPost]
    public void Post([FromBody]string value)
    {
    }

    // PUT api/<controller>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE api/<controller>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
    */
    }
}
