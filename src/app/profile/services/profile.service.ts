import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Profile } from './../model/profile';
import { Headers, RequestOptionsArgs, RequestOptions } from '@angular/http';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { QueryStringBuilder } from '../../shared/queryStringBuilder';

@Injectable()
export class ProfileService {
    constructor(private http$: HttpClient) { }

    getProfile(): Observable<Profile> {
        return this.http$.get('/api/profile', { observe: 'response' })
            .map((res: HttpResponse<Profile>) => {
                return res.body;
            });
    }

    saveProfile(profile: Profile): Observable<Profile> {
        return this.http$.put('/api/profile', profile, { observe: 'response' })
            .map((res: HttpResponse<Profile>) => {
                return res.body;
            });
    }
}
