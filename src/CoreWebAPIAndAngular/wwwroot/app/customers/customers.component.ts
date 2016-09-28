import { Component, OnInit } from '@angular/core';

import { CustomersService } from '../shared/customers.service';
import { ICustomer } from '../shared/interfaces';

@Component({
    moduleId: module.id,
    selector: 'customers',
    templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit {

    date: number;
    data: string;

    constructor(private customersService: CustomersService) { }

    ngOnInit() { 
        
    }

    getCustomers() {
        this.customersService.getCustomers()
            .subscribe((custs: ICustomer[]) => this.dumpData(custs));
    }

    getCustomersWithPromise() {
        this.customersService.getCustomersWithPromise()
            .then((custs: ICustomer[]) => this.dumpData(custs));
    }

    getCustomer(id: number) {
        this.customersService.getCustomer(id)
            .subscribe((cust: ICustomer) => this.dumpData(cust));
    }

    postCustomer() {
        const customer: ICustomer = { firstName: "Ken", lastName: "Doe", address: { "id": 100, "city": "Chandler", "state": "AZ", "zip": 85249 } }; 
        this.customersService.postCustomer(customer)
            .subscribe((cust: ICustomer) => this.dumpData(cust));
    }

    putCustomer() {
        const customer: ICustomer = { id: 1, firstName: "David", lastName: "Doe", address: { id: 100, city: "Chandler", state: "AZ", zip: 85249 } };
        this.customersService.putCustomer(customer)
            .subscribe((cust: ICustomer) => this.dumpData(cust));
    }

    deleteCustomer() {
        let id = 3;
        this.customersService.deleteCustomer(id)
            .subscribe((message: string) => this.dumpData(message));
    }

    dumpData(data: any) {
        this.date = Date.now();
        this.data = data;
    }

}