﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CoreWebAPIAndAngular.Model;

namespace CoreWebAPIAndAngular.Controllers
{
    [Route("api/[controller]")]
    public class CustomersController : Controller
    {
        //Cheap way to create a static cache of data
        //Purely for demo!
        static List<Customer> _customers = new List<Customer>
            {
                new Customer { Id = 1, FirstName="John", LastName="Doe",
                                Address = new Address { Id=1, City="Chandler", State="AZ", Zip=85249 }},
                new Customer { Id = 2, FirstName="Jane", LastName="Doe",
                                Address = new Address { Id=2, City="Chandler", State="AZ", Zip=85249 }},
                new Customer { Id = 3, FirstName="Tina", LastName="Smith",
                                Address = new Address { Id=3, City="Redmond", State="WA", Zip=98052 }}
            };

        public CustomersController()
        {

        }

        // GET api/customers
        [HttpGet]
        [ProducesResponseType(typeof(List<Customer>), 200)]
        [ProducesResponseType(typeof(List<Customer>), 404)]
        public ActionResult Get()
        {
            if (_customers == null)
            {
                return NotFound("No customers found!");
            }
            return Ok(_customers);
        }

        // GET api/customers/1
        [HttpGet("{id}", Name = "GetCustomerRoute")]
        [ProducesResponseType(typeof(Customer), 200)]
        [ProducesResponseType(typeof(Customer), 404)]
        public ActionResult Get(int id)
        {
            var cust = _customers.Where(c => c.Id == id).SingleOrDefault();
            if (cust == null)
            {
                return NotFound("Customer not found!");
            }
            return Ok(cust);
        }

        // POST api/customers
        [HttpPost]
        [ProducesResponseType(typeof(Customer), 201)]
        [ProducesResponseType(typeof(Customer), 400)]
        public ActionResult Post([FromBody]Customer postedCustomer)
        {
            if (postedCustomer == null || !ModelState.IsValid)
            {
                return BadRequest("Customer is invalid.!");
            }

            //Create a fake id for posted customer
            var maxId = _customers.Max(c => c.Id);
            var newId = ++maxId;
            postedCustomer.Id = newId;
            _customers.Add(postedCustomer);

            return CreatedAtRoute("GetCustomerRoute",
                new { id = postedCustomer.Id }, postedCustomer);
        }

        // PUT api/customers/5
        [HttpPut("{id}")]
        [ProducesResponseType(typeof(Customer), 200)]
        [ProducesResponseType(typeof(Customer), 404)]
        [ProducesResponseType(typeof(Customer), 400)]
        public ActionResult Put(int id, [FromBody]Customer putCustomer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }

            var cust = _customers.Where(c => c.Id == id).SingleOrDefault();
            if (cust == null)
            {
                return NotFound("Unable to update customer - not found!");
            }
            cust.FirstName = putCustomer.FirstName;
            cust.LastName = putCustomer.LastName;
            return Ok(cust);
        }

        // DELETE api/customers/5
        [HttpDelete("{id}")]
        [ProducesResponseType(typeof(Customer), 200)]
        [ProducesResponseType(typeof(Customer), 404)]
        public ActionResult Delete(int id)
        {
            var cust = _customers.Where(c => c.Id == id).SingleOrDefault();

            if (cust == null)
            {
                return NotFound("Unable to delete customer - not found!");
            }

            _customers.Remove(cust);
            return Ok($"Customer {id} Deleted");
        }
    }
}