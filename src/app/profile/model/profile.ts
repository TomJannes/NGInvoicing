import { Address } from '../../shared/models/address';

export interface Profile {
    _id: string;
    name?: string;
    kbo?: string;
    phone?: string;
    iban?: string;
    address?: Address;
}
