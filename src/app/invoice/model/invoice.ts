import { Customer } from '../../customers/model/customer';
import { Sku } from '../../sku/model/sku';

export interface InvoiceLine {
    sku?: Sku;
    amount?: number;
}

export interface Invoice {
    id: number;
    number?: number;
    creationDate?: Date;
    customer?: Customer;
    lines: InvoiceLine[];
}
