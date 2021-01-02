using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class InventoriesController
    {
        private readonly DataContext _context;
        public InventoriesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Inventory>>> GetProducts()
        {
            return await _context.Inventories.ToListAsync();
        }

        [HttpPost]
        public void UploadInventory(Inventory inventory)
        {
            _context.Inventories.Add(inventory);
        }
    }
}