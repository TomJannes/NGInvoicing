import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, ControlContainer } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

@Component({
  selector: 'app-address-form-card',
  templateUrl: './address-form-card.component.html',
  styleUrls: ['./address-form-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AddressFormCardComponent implements OnInit {
  constructor(public controlContainer: ControlContainer) {
  }

  ngOnInit() {
  }
}
