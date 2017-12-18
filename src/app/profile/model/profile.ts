import { Address } from '../../shared/models/address';

export interface Profile {
    id: number;
    name?: string;
    kbo?: string;
    address?: Address;
}
