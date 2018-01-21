import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { QueryStringBuilder } from '../../shared/queryStringBuilder';
import { InvoiceState } from '../model/invoice-state';
import { InvoiceStateSearchResult } from '../model/results/invoice-state-search-result';

@Injectable()
export class InvoiceStateService {
    constructor(private http$: HttpClient) { }

    searchInvoiceStates(params: any): Observable<InvoiceStateSearchResult> {
        const builder = new QueryStringBuilder();
        const querystring = builder.BuildParametersFromSearch(params);
        return this.http$.get('/api/invoicestate', { params: querystring, observe: 'response' })
            .map((res: HttpResponse<InvoiceState[]>) => {
                return { invoiceStates: res.body, paging: { totalItemCount: parseInt(res.headers.get('x-total-count'), 10) } };
            });
    }
}
