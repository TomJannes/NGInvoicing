import { PaginationParams } from '../../../shared/models/pagination-params';
import { SortingParams } from '../../../shared/models/sorting-params';

export interface CustomerSearchParams {
    name?: string;
    pagination: PaginationParams;
    sorting: SortingParams;
}
