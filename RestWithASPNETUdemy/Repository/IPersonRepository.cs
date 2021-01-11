using RestWithASPNETUdemy.Model;
using RestWithASPNETUdemy.Repository.Generic;

namespace RestWithASPNETUdemy.Repository
{
    public interface IPersonRepository : IRepository<Person>
    {
        Person Disabled(long id);
    }
}