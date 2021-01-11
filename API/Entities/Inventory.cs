using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Inventories")]
    public class Inventory
    {
        public int Id { get; set; }
        public string Handle { get; set; }
        public string Location { get; set; }
        public double Amount { get; set; }
    }
}