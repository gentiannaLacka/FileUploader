using System;
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

        public async Task<IEnumerable<Product>> Upload(IEnumerable<Product> products)
        {
            foreach (var product in products)
            {
                if (!(await this.ProductExists(product.Id)))
                {
                    _context.Products.Add(product);
                }
                else
                {
                    _context.Products.Update(product);
                }


            }

            await _context.SaveChangesAsync();

            return await _context.Products
            .Include(p => p.Image)
            .ToListAsync();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
        private async Task<bool> ProductExists(Int64 productId)
        {
            return await _context.Products.AnyAsync(x => x.Id == productId);
        }
    }
}