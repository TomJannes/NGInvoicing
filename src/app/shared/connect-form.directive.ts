import { Directive, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroupDirective, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store, Action } from '@ngrx/store';
import { MemoizedSelector } from '@ngrx/store/src/selector';
import { Subscription } from 'rxjs/Subscription';
import { Actions } from '@ngrx/effects';
import { FormArray, AbstractControl } from '@angular/forms/src/model';
import 'rxjs/add/operator/debounceTime';

//TODO: i think this can be removed, better to trigger this manually, gives more control
@Directive({
    selector: '[appConnectForm]'
})
export class ConnectFormDirective implements OnInit, OnDestroy {
    @Input() changeAction: { new(data: any): Action };
    @Input() data: any;
    @Input() successMessage: string;
    formChange: Subscription;
    formSuccess: Subscription;

    constructor(private formGroupDirective: FormGroupDirective,
        private actions$: Actions,
        private store: Store<any>) { }

    ngOnInit(): void {
        this.formGroupDirective.form.patchValue(this.data);

        this.formChange = this.formGroupDirective.form.valueChanges.debounceTime(500).subscribe(formValue => {
            this.store.dispatch(new this.changeAction({ data: { ...this.data, ...formValue } }));
        });
    }

    ngOnDestroy(): void {
        this.formChange.unsubscribe();
    }
}
