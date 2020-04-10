import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModifyProductForm } from './modify-product-form';

@Component({
  selector: 'app-dashboard-modify-product',
  templateUrl: './dashboard-modify-product.component.html',
  styleUrls: ['./dashboard-modify-product.component.scss']
})
export class DashboardModifyProductComponent implements OnInit {
  formErrors = false;
  @Output()
  onSaveComplete: EventEmitter<any> = new EventEmitter<any>(null);
  altUnit: boolean = false;
  modifyProductForm: ModifyProductForm = new ModifyProductForm();

  constructor() {}

  ngOnInit(): void {
    this.listenForFormChanges();
  }

  onSubmit(): void {
    if (this.modifyProductForm.valid) {
      this.onSaveComplete.emit(true);
    } else {
      this.formErrors = true;
    }
  }

  listenForFormChanges() {
    this.modifyProductForm.controls['unit'].valueChanges.subscribe((value) => {
      if (!value) {
        this.modifyProductForm.setAltUnit();
        this.altUnit = true;
      }
    });

    this.modifyProductForm.valueChanges.subscribe(() => {
      this.formErrors = false;
    });
  }
}
