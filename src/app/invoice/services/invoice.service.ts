import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Invoice } from './../model/invoice';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
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

    getInvoice(id: string): Observable<Invoice> {
        return this.http$.get('/api/invoice/' + id, { observe: 'response' })
            .map((res: HttpResponse<Invoice>) => {
                return res.body;
            });
    }

    saveInvoice(invoice: Invoice): Observable<Invoice> {
        if (invoice._id !== null) {
            return this.http$.put('/api/invoice/' + invoice._id, invoice, { observe: 'response' })
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

    download(id: string) {
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/pdf'
        });

        return this.http$.get('/api/download/invoice/' + id, { headers: headers, responseType: 'blob',  observe: 'response'})
            .map((res: any) => {
                return res.body;
            });
    }
}
