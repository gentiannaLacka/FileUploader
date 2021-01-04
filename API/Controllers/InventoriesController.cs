using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class InventoriesController
    {
        private readonly IInventoryRepository _inventoryRepository;
        private readonly IMapper _mapper;
        public InventoriesController(IInventoryRepository inventoryRepository, IMapper mapper)
        {
            _mapper = mapper;
            _inventoryRepository = inventoryRepository;

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<InventoryDto>>> GetInventories()
        {
            var inventories = await _inventoryRepository.GetInventoriesAsync();
            var inventoriesToReturn = _mapper.Map<IEnumerable<InventoryDto>>(inventories);
            return new OkObjectResult(inventoriesToReturn);
        }

        [HttpPost]
        public void Update(Inventory inventory)
        {
            _inventoryRepository.Update(inventory);
        }

        [HttpPost]
        public void UploadInventory(Inventory inventory)
        {
            _inventoryRepository.Update(inventory);
        }
    }
}