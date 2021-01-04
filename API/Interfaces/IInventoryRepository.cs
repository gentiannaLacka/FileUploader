using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interfaces
{
    public interface IInventoryRepository
    {
        void Upload(Inventory inventory);
        Task<IEnumerable<Inventory>> GetInventoriesAsync();
        Task<bool> SaveAllAsync();
    }
}