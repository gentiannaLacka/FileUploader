using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class ProductRepository : IProductRepository
    {
        private readonly DataContext _context;
        public ProductRepository(DataContext context)
        {
            _context = context;

        }
        public async Task<IEnumerable<Product>> GetProductsAsync()
        {
            return await _context.Products
            .Include(p => p.Image)
            .ToListAsync();
        }

        public void Upload(Product product)
        {
            _context.Entry(product).State = EntityState.Modified;
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}