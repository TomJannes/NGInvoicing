
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { User } from './../models/user';

@Injectable()
export class UsersService {
  constructor(
    private http$: HttpClient,
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject('LOCALSTORAGE') private localStorage: any
  ) { }

  public authenticate(email: string, password: string): Observable<User> {
    return this.http$.post('/api/auth/login', { email: email, password: password }, { observe: 'response' })
      .map((res: any) => {
        if (isPlatformBrowser(this.platformId)) {
          this.localStorage.setItem('user', JSON.stringify(res.body));
        }
        return res.body;
      });
  }

  public signout(): Observable<boolean> {
    // Normally you would do an HTTP request sign end the session
    // but, let's just return an observable of true.
    var data = this.localStorage.setItem('user', null);
    return Observable.of(true);
  }

  public tryLoadAuthenticationFromLocalStorage(): Observable<User> {
    var authenticatedUser = null;
    if (isPlatformBrowser(this.platformId)) {
      try {
        var data = this.localStorage.getItem('user');
        if (data !== null) {
          authenticatedUser = JSON.parse(data);
        }
      } catch (err) {
        this.localStorage.setItem('user', null);
      }
      return Observable.of(authenticatedUser);
    }
  }
}