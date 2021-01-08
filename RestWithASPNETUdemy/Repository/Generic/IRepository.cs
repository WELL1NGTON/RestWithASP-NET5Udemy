using System.Collections.Generic;
using RestWithASPNETUdemy.Model.Base;

namespace RestWithASPNETUdemy.Repository.Generic
{
    public interface IRepository<T> where T : BaseEntity
    {
        T Create(T book);
        T FindByID(long id);
        List<T> FindAll();
        T Update(T book);
        void Delete(long id);

        bool Exists(long id);
    }
}