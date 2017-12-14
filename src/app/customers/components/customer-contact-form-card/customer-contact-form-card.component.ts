import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-customer-contact-form-card',
  templateUrl: './customer-contact-form-card.component.html',
  styleUrls: ['./customer-contact-form-card.component.css']
})
export class CustomerContactFormCardComponent implements OnInit {

  constructor(public controlContainer: ControlContainer) { }

  ngOnInit() {
  }

}
