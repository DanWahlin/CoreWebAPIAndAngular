"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/toPromise');
var Rx_1 = require('rxjs/Rx');
var CustomersService = (function () {
    function CustomersService(http) {
        this.http = http;
        this.url = '/api/customers';
    }
    CustomersService.prototype.getCustomers = function () {
        return this.http.get(this.url)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    CustomersService.prototype.getCustomersWithPromise = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    CustomersService.prototype.getCustomer = function (id) {
        return this.http.get(this.url + "/" + id)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    CustomersService.prototype.postCustomer = function (customer) {
        return this.http.post(this.url, customer)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    CustomersService.prototype.putCustomer = function (customer) {
        return this.http.put(this.url + "/" + customer.id, customer)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    CustomersService.prototype.deleteCustomer = function (id) {
        return this.http.delete(this.url + "/" + id)
            .map(function (resp) { return resp; })
            .catch(this.handleError);
    };
    CustomersService.prototype.handleError = function (error) {
        var message = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(message);
        return Rx_1.Observable.throw(message);
    };
    CustomersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CustomersService);
    return CustomersService;
}());
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map