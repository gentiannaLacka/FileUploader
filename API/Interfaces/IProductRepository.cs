using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interfaces
{
    public interface IProductRepository
    {
        void Upload(Product product);
        Task<IEnumerable<Product>> GetProductsAsync();
        Task<bool> SaveAllAsync();
    }
}