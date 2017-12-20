import { PaginationParams } from '../../../shared/models/pagination-params';
import { SortingParams } from '../../../shared/models/sorting-params';

export interface InvoiceSearchParams {
    id?: number;
    number?: string;
    pagination: PaginationParams;
    sorting: SortingParams;
}
