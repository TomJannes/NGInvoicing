import { CustomerType } from './customer-type';
import { Address } from '../../shared/models/address';

export interface Customer {
    id: number;
    name?: string;
    customerType?: CustomerType;
    address?: Address;
}
