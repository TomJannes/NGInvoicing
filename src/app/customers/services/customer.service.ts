import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Customer } from './../model/customer';
import { Headers, RequestOptionsArgs, RequestOptions } from '@angular/http';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { QueryStringBuilder } from '../../shared/queryStringBuilder';
import { CustomerSearchParams } from '../model/params/customer-search-params';
import { CustomerSearchResult } from '../model/results/customer-search-result';

@Injectable()
export class CustomerService {
    constructor(private http$: HttpClient) { }

    searchCustomers(params: CustomerSearchParams): Observable<CustomerSearchResult> {
        const builder = new QueryStringBuilder();
        const querystring = builder.BuildParametersFromSearch(params);
        return this.http$.get('/api/customer', { params: querystring, observe: 'response' })
            .map((res: HttpResponse<Customer[]>) => {
                return { customers: res.body, paging: { totalItemCount: parseInt(res.headers.get('x-total-count'), 10) } };
            });
    }

    getCustomer(id: number): Observable<Customer> {
        return this.http$.get('/api/customer/' + id, { observe: 'response' })
            .map((res: HttpResponse<Customer>) => {
                return res.body;
            });
    }

    saveCustomer(customer: Customer): Observable<Customer> {
        if (customer.id !== 0) {
            return this.http$.put('/api/customer/' + customer.id, customer, { observe: 'response' })
                .map((res: HttpResponse<Customer>) => {
                    return res.body;
                });
        } else {
            return this.http$.post('/api/customer', customer, { observe: 'response' })
                .map((res: HttpResponse<Customer>) => {
                    return res.body;
                });
        }
    }
}
