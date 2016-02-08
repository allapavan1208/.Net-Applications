using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FamilyDetails.EntityDataModel;
using FamilyDetails.Models;

namespace FamilyDetails.Controllers
{
    public class PersonController : ApiController
    {
        // GET: api/Person
        public IEnumerable<Person> Get()
        {
            return PersonRepository.GetPersons();
        }

        // GET: api/Person/5
        public Person Get(int id)
        {
            return PersonRepository.GetPersons().FirstOrDefault(s => s.Id == id);
        }

        // POST: api/Person
        public HttpResponseMessage Post(Person person)
        {
            PersonRepository.InsertPerson(person);
            var response = Request.CreateResponse(HttpStatusCode.Created, person);
            string url = Url.Link("DefaultApi", new { person.Id });
            response.Headers.Location = new Uri(url);

            return response;

        }

        // PUT: api/Person/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Person/5
        public HttpResponseMessage Delete(int id)
        {
            PersonRepository.DeletePerson(id);
            var response = Request.CreateResponse(HttpStatusCode.OK, id);
            return response;
        }
    }
}
