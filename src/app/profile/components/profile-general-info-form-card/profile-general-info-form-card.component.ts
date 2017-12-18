import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-profile-general-info-form-card',
  templateUrl: './profile-general-info-form-card.component.html',
  styleUrls: ['./profile-general-info-form-card.component.css']
})
export class ProfileGeneralInfoFormCardComponent implements OnInit {

  constructor(public controlContainer: ControlContainer) { }

  ngOnInit() {
  }

}
