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
var customers_service_1 = require('../shared/customers.service');
var CustomersComponent = (function () {
    function CustomersComponent(customersService) {
        this.customersService = customersService;
    }
    CustomersComponent.prototype.ngOnInit = function () {
    };
    CustomersComponent.prototype.getCustomers = function () {
        var _this = this;
        this.customersService.getCustomers()
            .subscribe(function (custs) { return _this.dumpData(custs); });
    };
    CustomersComponent.prototype.getCustomersWithPromise = function () {
        var _this = this;
        this.customersService.getCustomersWithPromise()
            .then(function (custs) { return _this.dumpData(custs); });
    };
    CustomersComponent.prototype.getCustomer = function (id) {
        var _this = this;
        this.customersService.getCustomer(id)
            .subscribe(function (cust) { return _this.dumpData(cust); });
    };
    CustomersComponent.prototype.postCustomer = function () {
        var _this = this;
        var customer = { firstName: "Ken", lastName: "Doe", address: { "id": 100, "city": "Chandler", "state": "AZ", "zip": 85249 } };
        this.customersService.postCustomer(customer)
            .subscribe(function (cust) { return _this.dumpData(cust); });
    };
    CustomersComponent.prototype.putCustomer = function () {
        var _this = this;
        var customer = { id: 1, firstName: "David", lastName: "Doe", address: { id: 100, city: "Chandler", state: "AZ", zip: 85249 } };
        this.customersService.putCustomer(customer)
            .subscribe(function (cust) { return _this.dumpData(cust); });
    };
    CustomersComponent.prototype.deleteCustomer = function () {
        var _this = this;
        var id = 3;
        this.customersService.deleteCustomer(id)
            .subscribe(function (message) { return _this.dumpData(message); });
    };
    CustomersComponent.prototype.dumpData = function (data) {
        this.date = Date.now();
        this.data = data;
    };
    CustomersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customers',
            templateUrl: 'customers.component.html'
        }), 
        __metadata('design:paramtypes', [customers_service_1.CustomersService])
    ], CustomersComponent);
    return CustomersComponent;
}());
exports.CustomersComponent = CustomersComponent;
//# sourceMappingURL=customers.component.js.map