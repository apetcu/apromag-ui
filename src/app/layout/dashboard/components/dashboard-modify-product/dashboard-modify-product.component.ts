import { Component, OnInit } from '@angular/core';
import { ModifyProductForm } from './modify-product-form';

@Component({
  selector: 'app-dashboard-modify-product',
  templateUrl: './dashboard-modify-product.component.html',
  styleUrls: ['./dashboard-modify-product.component.scss']
})
export class DashboardModifyProductComponent implements OnInit {
  altUnit: boolean = false;
  modifyProductForm: ModifyProductForm = new ModifyProductForm();

  constructor() {}

  ngOnInit(): void {
    this.listenForUnitChanges();
  }

  listenForUnitChanges() {
    this.modifyProductForm.controls['unit'].valueChanges.subscribe((value) => {
      if (!value) {
        this.modifyProductForm.setAltUnit();
        this.altUnit = true;
      }
    });
  }
}
