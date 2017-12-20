import { Invoice } from '../invoice';
import { PagingInfo } from '../../../shared/models/paging-info';

export interface InvoiceSearchResult {
    invoices: Invoice[];
    paging: PagingInfo;
}
