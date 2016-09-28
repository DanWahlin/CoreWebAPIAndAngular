import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

import { ICustomer } from './interfaces';

@Injectable()
export class CustomersService {

    url: string = '/api/customers';

    constructor(private http: Http) { }
    
    getCustomers(): Observable<ICustomer[]> {
        return this.http.get(this.url)
            .map((resp: Response) => resp.json())
            .catch(this.handleError);
    }

    getCustomersWithPromise(): Promise<ICustomer[]> {
        return this.http.get(this.url)
            .toPromise()
            .then((resp: Response) => resp.json())
            .catch(this.handleError);
    }

    getCustomer(id: number) : Observable<ICustomer> {
        return this.http.get(`${this.url}/${id}`)
            .map((resp: Response) => resp.json())
            .catch(this.handleError); 
    }

    postCustomer(customer: ICustomer): Observable<ICustomer> {
        return this.http.post(this.url, customer)
            .map((resp: Response) => resp.json())
            .catch(this.handleError); 
    }

    putCustomer(customer: ICustomer): Observable<ICustomer> {
        return this.http.put(`${this.url}/${customer.id}`, customer)
            .map((resp: Response) => resp.json())
            .catch(this.handleError);
    }

    deleteCustomer(id: number): Observable<string> {
        return this.http.delete(`${this.url}/${id}`)
            .map((resp: Response) => resp)
            .catch(this.handleError);
    }


    private handleError(error: any) {
        let message = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(message); 
        return Observable.throw(message);
    }

}