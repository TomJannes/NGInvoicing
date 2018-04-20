import { CustomerType } from './customer-type';
import { Address } from '../../shared/models/address';
import { Sku } from '../../sku/model/sku';

export interface Customer {
    _id: string;
    name?: string;
    kbo?: string;
    customerType?: CustomerType;
    address?: Address;
    contacts: Contact[];
    linkedSkus: Sku[];
}

export interface Contact {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}
