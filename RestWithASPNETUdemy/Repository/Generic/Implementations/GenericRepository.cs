using System.Collections.Generic;
using RestWithASPNETUdemy.Model.Base;

namespace RestWithASPNETUdemy.Repository.Generic.Implementations
{
    public class GenericRepository<T> : IRepository<T> where T : BaseEntity
    {
        public T Create(T book)
        {
            throw new System.NotImplementedException();
        }

        public void Delete(long id)
        {
            throw new System.NotImplementedException();
        }

        public bool Exists(long id)
        {
            throw new System.NotImplementedException();
        }

        public List<T> FindAll()
        {
            throw new System.NotImplementedException();
        }

        public T FindByID(long id)
        {
            throw new System.NotImplementedException();
        }

        public T Update(T book)
        {
            throw new System.NotImplementedException();
        }
    }
}