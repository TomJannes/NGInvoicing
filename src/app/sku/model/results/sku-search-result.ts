import { Sku } from '../sku';
import { PagingInfo } from '../../../shared/models/paging-info';

export interface SkuSearchResult {
    skus: Sku[];
    paging: PagingInfo;
}
