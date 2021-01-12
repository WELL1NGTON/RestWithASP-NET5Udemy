using System.Collections.Generic;
using System.Linq;
using RestWithASPNETUdemy.Model;
using RestWithASPNETUdemy.Model.Context;
using RestWithASPNETUdemy.Repository.Generic.Implementations;

namespace RestWithASPNETUdemy.Repository.Implementations
{
    public class PersonRepository : GenericRepository<Person>, IPersonRepository
    {
        public PersonRepository(PostgreeSQLContext context) : base(context) { }

        public Person Disable(long id)
        {
            if (!_context.Persons.Any(p => p.Id.Equals(id))) return null;
            var user = _context.Persons.SingleOrDefault(p => p.Id.Equals(id));
            if (user != null)
            {
                user.Enabled = false;

                try
                {
                    _context.Entry(user).CurrentValues.SetValues(user);
                    _context.SaveChanges();
                }
                catch
                {
                    throw;
                }
            }
            return user;
        }

        public List<Person> FindByName(string firstName, string lastName)
        {
            if (!string.IsNullOrWhiteSpace(firstName) && !string.IsNullOrWhiteSpace(lastName))
            {
                return _context.Persons.Where(
                    p =>
                        p.FirstName.Contains(firstName) &&
                        p.LastName.Contains(lastName))
                    .ToList();
            }
            else if (!string.IsNullOrWhiteSpace(firstName))
            {
                return _context.Persons.Where(
                    p => p.FirstName.Contains(firstName))
                    .ToList();
            }
            else if (!string.IsNullOrWhiteSpace(lastName))
            {
                return _context.Persons.Where(
                    p => p.LastName.Contains(lastName))
                    .ToList();
            }
            return null;
        }
    }
}