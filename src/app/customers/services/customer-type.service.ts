import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { QueryStringBuilder } from '../../shared/queryStringBuilder';
import { CustomerType } from '../model/customer-type';
import { CustomerTypeSearchResult } from '../model/results/customer-type-search-result';

@Injectable()
export class CustomerTypeService {
    constructor(private http$: HttpClient) { }

    searchCustomerTypes(params: any): Observable<CustomerTypeSearchResult> {
        const builder = new QueryStringBuilder();
        const querystring = builder.BuildParametersFromSearch(params);
        return this.http$.get('/api/customertype', { params: querystring, observe: 'response' })
            .map((res: HttpResponse<CustomerType[]>) => {
                return { customerTypes: res.body, paging: { totalItemCount: parseInt(res.headers.get('x-total-count'), 10) } };
            });
    }
}
