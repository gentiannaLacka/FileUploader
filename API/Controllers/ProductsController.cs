using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductRepository _productRepository;
        private readonly IMapper _mapper;

        public ProductsController(IProductRepository productRepository, IMapper mapper)
        {
            _mapper = mapper;
            _productRepository = productRepository;
        }

        public IMapper Mapper { get; }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductDto>>> GetProducts()
        {
            var products = await _productRepository.GetProductsAsync();
            var productsToReturn = _mapper.Map<IEnumerable<ProductDto>>(products);
            return new OkObjectResult(productsToReturn);
        }

        [HttpPost]
        public void Update(Product product)
        {
            _productRepository.Update(product);

        }

        [HttpPost("uploadProduct")]
        public void UploadProduct(IFormFile file)
        {

        }
    }
}