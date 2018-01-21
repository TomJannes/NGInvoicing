import { InvoiceState } from '../invoice-state';
import { PagingInfo } from '../../../shared/models/paging-info';

export interface InvoiceStateSearchResult {
    invoiceStates: InvoiceState[];
    paging: PagingInfo;
}
