import { MemoizedSelector, Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

export class PreloadHelper {
    static preloadData<T>(
        store: Store<any>,
        selector: MemoizedSelector<object, T>,
        action: Action,
        filter: (data: T) => boolean): Observable<T> {
        return store.select(selector)
            .do((data: T) => {
                if (!filter(data) && action !== null) {
                    store.dispatch(action);
                }
            })
            .filter((data: T) => {
                return filter(data);
            }).take(1);
    }

    static preloadDataAllways<T>(
        store: Store<any>,
        selector: MemoizedSelector<object, T>,
        action: Action,
        filter: (data: T) => boolean): Observable<T> {
        return store.select(selector)
            .do((data: T) => {
                store.dispatch(action);
            })
            .filter((data: T) => {
                return filter(data);
            }).take(1);
    }
}
