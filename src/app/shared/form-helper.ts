import { FormGroup, FormControl, FormArray, AbstractControl } from '@angular/forms';

export class FormHelper {
    static validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            } else if (control instanceof FormArray) {
                control.controls.forEach(nestedControl => {
                    this.validateAllFormFields(<FormGroup>nestedControl);
                });
            }
        });
    }
}
