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
    [AllowAnonymous]
    public class DatoController : Controller
    {

        AgentaDataAccessLayer a = new AgentaDataAccessLayer();

        [HttpGet]
        [AllowAnonymous]
        [EnableCors("AllowAnyOrigin")]
        public IEnumerable<Dato> Index()
        {
            return a.getAllDato();
        }


        [HttpPost]

        public int Create([FromBody]Dato dato)
        {
            return a.Create(dato);
        }

      
[HttpDelete("{id}")]
        public int Delete( int id)
        {
            return a.DeleltebyIdIdDatos(id);
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
