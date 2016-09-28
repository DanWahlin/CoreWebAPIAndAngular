using CoreWebAPIAndAngular.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWebAPIAndAngular.Repository
{
    //Fake Repository that's added as a Singleton in Startup.cs
    public class CustomersRepository : ICustomersRepository
    {
        //Cheap way to create a cache of data
        //Purely for demo!
        List<Customer> _customers = new List<Customer>
        {
                new Customer { Id = 1, FirstName="John", LastName="Doe",
                                Address = new Address { Id=1, City="Chandler", State="AZ", Zip=85249 }},
                new Customer { Id = 2, FirstName="Jane", LastName="Doe",
                                Address = new Address { Id=2, City="Chandler", State="AZ", Zip=85249 }},
                new Customer { Id = 3, FirstName="Tina", LastName="Smith",
                                Address = new Address { Id=3, City="Redmond", State="WA", Zip=98052 }}
        };

        public List<Customer> Customers
        {
            get
            {
                return _customers;
            }
        }

    }
}
