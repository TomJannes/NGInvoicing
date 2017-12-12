import { Customer } from '../customer';
import { PagingInfo } from '../../../shared/models/paging-info';

export interface CustomerSearchResult {
    customers: Customer[];
    paging: PagingInfo;
}
