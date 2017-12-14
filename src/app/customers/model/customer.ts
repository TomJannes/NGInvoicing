import { CustomerType } from './customer-type';
import { Address } from '../../shared/models/address';

export interface Customer {
    id: number;
    name?: string;
    customerType?: CustomerType;
    address?: Address;
    contacts: Contact[];
}

export interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}
