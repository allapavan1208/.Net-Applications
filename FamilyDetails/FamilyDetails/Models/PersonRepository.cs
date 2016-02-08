using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FamilyDetails.EntityDataModel;

namespace FamilyDetails.Models
{
    public class PersonRepository
    {
        private static FamilyEntities2 _personDb;
        private static FamilyEntities2 PersonDb
        {
            get { return _personDb ?? (_personDb = new FamilyEntities2()); }
        }

        /// <summary>
        /// Gets the Persons.
        /// </summary>
        public static IEnumerable<Person> GetPersons()
        {
            var query = from persons in PersonDb.People select persons;
            return query.ToList();
        }

        /// <summary>
        /// Inserts the Person to database.
        /// </summary>
        public static void InsertPerson(Person person)
        {
            PersonDb.People.Add(person);
            PersonDb.SaveChanges();
        }

        /// <summary>
        /// Deletes Person from database.
        /// </summary>
        public static void DeletePerson(int personId)
        {
            var deleteItem = PersonDb.People.FirstOrDefault(c => c.Id == personId);

            if (deleteItem != null)
            {
                PersonDb.People.Remove(deleteItem);
                PersonDb.SaveChanges();
            }
        }
    }
}