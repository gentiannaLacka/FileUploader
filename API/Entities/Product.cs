
using System;
using System.Collections.Generic;

namespace API.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string BodyHtml { get; set; }
        public string Vendor { get; set; }
        public string ProductType { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Handle { get; set; }
        public string PublishedScope { get; set; }
        public string Tags { get; set; }
        public ICollection<Image> Image { get; set; }
    }


}