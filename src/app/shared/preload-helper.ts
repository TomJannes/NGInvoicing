import { MemoizedSelector, Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

export class PreloadHelper {
    static preloadData<T>(
        store: Store<any>,
        selector: MemoizedSelector<object, T>,
        action: Action,
        filter: (data: T) => boolean): Observable<T> {
        return store.select(selector)
            .do((data: T) => {
                if (!filter(data)) {
                    store.dispatch(action);
                }
            })
            .filter((data: T) => {
                return filter(data);
            })
            .take(1);
    }
}
