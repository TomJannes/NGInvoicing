import { Customer } from '../../customers/model/customer';
import { Sku } from '../../sku/model/sku';

export interface InvoiceLine {
    sku?: Sku;
    vat?: number;
    price?: number;
    amount?: number;
    total?: number;
    totalInc?: number;
    totalVat?: number;
}

export interface Invoice {
    _id: string;
    number?: number;
    invoiceDate?: Date;
    creationDate?: Date;
    customer?: Customer;
    lines: InvoiceLine[];
}
