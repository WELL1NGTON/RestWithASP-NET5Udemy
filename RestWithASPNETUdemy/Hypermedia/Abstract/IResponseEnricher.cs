using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Filters;

namespace RestWithASPNETUdemy.Hypermedia.Abstract
{
    public interface IResponseEnricher
    {
        bool canEnrich(ResultExecutedContext context);
        Task Enrich(ResultExecutedContext context);
    }
}