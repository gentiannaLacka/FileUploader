using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IInventoryRepository
    {
        Task<IEnumerable<Inventory>> Upload(IEnumerable<Inventory> inventories);
        Task<IEnumerable<Inventory>> GetInventoriesAsync();
        Task<bool> SaveAllAsync();
    }
}