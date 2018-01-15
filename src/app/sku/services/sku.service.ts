import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Sku } from './../model/sku';
import { Headers, RequestOptionsArgs, RequestOptions } from '@angular/http';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { QueryStringBuilder } from '../../shared/queryStringBuilder';
import { SkuSearchParams } from '../model/params/sku-search-params';
import { SkuSearchResult } from '../model/results/sku-search-result';

@Injectable()
export class SkuService {
    constructor(private http$: HttpClient) { }

    searchSkus(params: SkuSearchParams): Observable<SkuSearchResult> {
        const builder = new QueryStringBuilder();
        const querystring = builder.BuildParametersFromSearch(params);
        return this.http$.get('/api/sku', { params: querystring, observe: 'response' })
            .map((res: HttpResponse<Sku[]>) => {
                return { skus: res.body, paging: { totalItemCount: parseInt(res.headers.get('x-total-count'), 10) } };
            });
    }

    getSku(id: string): Observable<Sku> {
        return this.http$.get('/api/sku/' + id, { observe: 'response' })
            .map((res: HttpResponse<Sku>) => {
                return res.body;
            });
    }

    saveSku(sku: Sku): Observable<Sku> {
        if (sku._id !== null) {
            return this.http$.put('/api/sku/' + sku._id, sku, { observe: 'response' })
                .map((res: HttpResponse<Sku>) => {
                    return res.body;
                });
        } else {
            return this.http$.post('/api/sku', sku, { observe: 'response' })
                .map((res: HttpResponse<Sku>) => {
                    return res.body;
                });
        }
    }
}
