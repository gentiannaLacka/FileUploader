namespace API.Entities
{
    public class Inventory
    {
        public int Id { get; set; }
        public string Handle { get; set; }
        public string Location { get; set; }
        public double Amount { get; set; }
    }
}