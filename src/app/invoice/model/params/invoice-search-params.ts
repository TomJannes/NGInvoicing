import { PaginationParams } from '../../../shared/models/pagination-params';
import { SortingParams } from '../../../shared/models/sorting-params';

export interface InvoiceSearchParams {
    number?: string;
    pagination: PaginationParams;
    sorting: SortingParams;
}
