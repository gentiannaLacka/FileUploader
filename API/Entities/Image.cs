using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Images")]
    public class Image
    {
        public int Id { get; set; }
        public int Position { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public bool ImageAlt { get; set; } = false;
        public int Width { get; set; }
        public int Height { get; set; }
        public string ImageSrc { get; set; }
        public Product Product { get; set; }
        public int ProductId { get; set; }

    }
}