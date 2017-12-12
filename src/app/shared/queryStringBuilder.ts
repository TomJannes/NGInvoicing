import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpParams } from '@angular/common/http';

export class QueryStringBuilder {
    private params: HttpParams;
    BuildParametersFromSearch<T>(obj: T): HttpParams {
        this.params = new HttpParams();

        if (obj == null) {
            return this.params;
        }

        this.PopulateSearchParams('', obj);

        return this.params;
    }

    private PopulateArray<T>(prefix: string, val: Array<T>) {
        for (const index of Object.keys(val)) {
            const key = prefix + '[' + index + ']';
            const value: any = val[index];
            this.PopulateSearchParams(key, value);
        }
    }

    private PopulateObject<T>(prefix: string, val: T) {
        const objectKeys = Object.keys(val) as Array<keyof T>;

        if (prefix) {
            prefix = prefix + '.';
        }

        for (const objKey of objectKeys) {

            const value = val[objKey];
            const key = prefix + objKey;

            this.PopulateSearchParams(key, value);
        }
    }

    private PopulateSearchParams<T>(key: string, value: any) {
        if (value instanceof Array) {
            this.PopulateArray(key, value);
        } else if (value instanceof Date) {
            this.params = this.params.append(key, value.toISOString());
        } else if (value instanceof Object) {
            return this.PopulateObject(key, value);
        } else if (value === '') {
            // ignore empty value
        } else {
            this.params = this.params.append(key, value.toString());
        }
    }
}
