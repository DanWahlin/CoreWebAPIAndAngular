using System.Collections.Generic;
using CoreWebAPIAndAngular.Model;

namespace CoreWebAPIAndAngular.Repository
{
    public interface ICustomersRepository
    {
        List<Customer> Customers { get; }
    }
}