import { PaginationParams } from '../../../shared/models/pagination-params';
import { SortingParams } from '../../../shared/models/sorting-params';

export interface InvoiceSearchParams {
    number?: string;
    customer?: InvoiceCustomerSearchParams;
    pagination: PaginationParams;
    sorting: SortingParams;
}

export interface InvoiceCustomerSearchParams {
    name? : string
}
