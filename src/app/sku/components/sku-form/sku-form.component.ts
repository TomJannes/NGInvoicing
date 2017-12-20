import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { Sku } from '../../model/sku';
import { Observable } from 'rxjs/Observable';
import * as fromSku from '../../actions/sku-detail';
import { EventEmitter } from '@angular/core';
import { FormHelper } from '../../../shared/form-helper';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-sku-form',
  templateUrl: './sku-form.component.html',
  styleUrls: ['./sku-form.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SkuFormComponent implements OnInit {
  form: FormGroup;
  @Input() sku: Sku;
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  actionType: any;
  successMessage: string;

  constructor(private fb: FormBuilder) {
    this.actionType = fromSku.FormUpdate;
    this.successMessage = fromSku.SAVE_SUCCESS;

    this.form = fb.group({
      name: ['', Validators.required]
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
