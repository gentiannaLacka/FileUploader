
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{

    [Table("Products")]
    public class Product
    {
        public Int64 Id { get; set; }
        public string Title { get; set; }
        public string BodyHtml { get; set; }
        public string Vendor { get; set; }
        public string ProductType { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Handle { get; set; }
        public string PublishedScope { get; set; }
        public string Tags { get; set; }
        //public string ImageSrc { get; set; }
        public Image Image { get; set; }
    }


}