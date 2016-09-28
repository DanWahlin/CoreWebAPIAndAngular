export interface ICustomer {
    id?: number;
    firstName: string;
    lastName: string;
    address: IAddress;
}

export interface IAddress {
    id: number;
    city: string;
    state: string;
    zip: number;
}