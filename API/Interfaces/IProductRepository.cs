using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interfaces
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> Upload(IEnumerable<Product> inventories);
        Task<IEnumerable<Product>> GetProductsAsync();
        Task<bool> SaveAllAsync();
    }
}