import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as fromProfile from '../../actions/profile';
import { EventEmitter } from '@angular/core';
import { FormHelper } from '../../../shared/form-helper';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Profile } from '../../model/profile';


@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProfileFormComponent implements OnInit {
  form: FormGroup;
  @Input() profile: Profile;
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  actionType: any;
  successMessage: string;

  constructor(private fb: FormBuilder) {
    this.actionType = fromProfile.FormUpdate;
    this.successMessage = fromProfile.SAVE_SUCCESS;

    this.form = fb.group({
      name: ['', Validators.required],
      kbo: ['', Validators.required],
      phone: ['', Validators.required],
      iban: ['', Validators.required],
      address: fb.group({
        street: ['', Validators.required],
        number: ['', Validators.required],
        bus: '',
        zip: ['', Validators.required],
        place: ['', Validators.required]
      })
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    FormHelper.validateAllFormFields(this.form);
    if (this.form.valid) {
      this.save.emit(null);
    }
  }

  onCancel() {
    this.cancel.emit(null);
  }
}

