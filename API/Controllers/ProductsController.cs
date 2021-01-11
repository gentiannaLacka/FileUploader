using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [EnableCors]
    [Route("api/products")]
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

        [HttpGet("getProducts")]
        public async Task<ActionResult<IEnumerable<ProductDto>>> GetProducts()
        {
            var products = await _productRepository.GetProductsAsync();
            var productsToReturn = _mapper.Map<IEnumerable<ProductDto>>(products);
            return new OkObjectResult(productsToReturn);
        }

        [HttpPost("uploadProduct")]
        public async Task<ActionResult<IEnumerable<ProductDto>>> UploadProduct(IEnumerable<Product> products)
        {

            var productList = await _productRepository.Upload(products);
            var productsToReturn = _mapper.Map<IEnumerable<ProductDto>>(productList);
            return new OkObjectResult(productsToReturn);
        }
      
    }
}