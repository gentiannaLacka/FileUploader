using System.Linq;
using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Inventory, InventoryDto>();
            CreateMap<Image, ImageDto>();
            CreateMap<Product, ProductDto>().ForMember(
                dest => dest.ImageSrc,
                opt => opt.MapFrom(src => src.Image.FirstOrDefault().ImageSrc)
            );
        }
    }
}