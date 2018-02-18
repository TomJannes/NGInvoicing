import { Injectable, OnDestroy } from "@angular/core";
import { HttpClient, HttpInterceptor, HttpHandler, HttpRequest, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from "@angular/common/http";
import * as fromUsers from '../../reducers';
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";

@Injectable()
export class BearerTokenInterceptor implements HttpInterceptor, OnDestroy {
    token: string;
    tokenSubscription: Subscription;
    constructor(private http$: HttpClient, private store: Store<fromUsers.State>) {
        this.tokenSubscription = this.store.select(fromUsers.getToken).subscribe(x => {
            this.token = x;
        });
    }

    ngOnDestroy(): void {
        this.tokenSubscription.unsubscribe();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        if(this.token) {
            var changedRequest = req.clone({ setHeaders: { 'Authorization': `Bearer ${this.token}`} });
            return next.handle(changedRequest);
        } else {
            return next.handle(req);
        }
    }
}