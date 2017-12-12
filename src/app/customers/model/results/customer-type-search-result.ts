import { CustomerType } from '../customer-type';
import { PagingInfo } from '../../../shared/models/paging-info';

export interface CustomerTypeSearchResult {
    customerTypes: CustomerType[];
    paging: PagingInfo;
}
