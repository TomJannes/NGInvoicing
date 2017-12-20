import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Invoice } from './../model/invoice';
import { Headers, RequestOptionsArgs, RequestOptions } from '@angular/http';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { QueryStringBuilder } from '../../shared/queryStringBuilder';
import { InvoiceSearchParams } from '../model/params/invoice-search-params';
import { InvoiceSearchResult } from '../model/results/invoice-search-result';

@Injectable()
export class InvoiceService {
    constructor(private http$: HttpClient) { }

    searchInvoices(params: InvoiceSearchParams): Observable<InvoiceSearchResult> {
        const builder = new QueryStringBuilder();
        const querystring = builder.BuildParametersFromSearch(params);
        return this.http$.get('/api/invoice', { params: querystring, observe: 'response' })
            .map((res: HttpResponse<Invoice[]>) => {
                return { invoices: res.body, paging: { totalItemCount: parseInt(res.headers.get('x-total-count'), 10) } };
            });
    }

    getInvoice(id: number): Observable<Invoice> {
        return this.http$.get('/api/invoice/' + id, { observe: 'response' })
            .map((res: HttpResponse<Invoice>) => {
                return res.body;
            });
    }

    saveInvoice(invoice: Invoice): Observable<Invoice> {
        if (invoice.id !== 0) {
            return this.http$.put('/api/invoice/' + invoice.id, invoice, { observe: 'response' })
                .map((res: HttpResponse<Invoice>) => {
                    return res.body;
                });
        } else {
            return this.http$.post('/api/invoice', invoice, { observe: 'response' })
                .map((res: HttpResponse<Invoice>) => {
                    return res.body;
                });
        }
    }
}
