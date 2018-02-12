import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-sku-general-info-form-card',
  templateUrl: './sku-general-info-form-card.component.html',
  styleUrls: ['./sku-general-info-form-card.component.scss']
})
export class SkuGeneralInfoFormCardComponent implements OnInit {
  constructor(public controlContainer: ControlContainer) { }

  ngOnInit() {
  }
}
