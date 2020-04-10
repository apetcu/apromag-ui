import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModifyProductForm } from './modify-product-form';
import { DashboardFacadeService } from '../../services/dashboard-facade.service';
import { Product } from '../../../product/models/product';

@Component({
  selector: 'app-dashboard-modify-product',
  templateUrl: './dashboard-modify-product.component.html',
  styleUrls: ['./dashboard-modify-product.component.scss']
})
export class DashboardModifyProductComponent implements OnInit {
  @Output()
  onSaveComplete: EventEmitter<any> = new EventEmitter<any>(null);
  @Input()
  editProduct: Product = null;
  editProductId: number = null;
  modifyProductForm: ModifyProductForm = new ModifyProductForm();

  altUnit: boolean = false;
  formErrors = false;
  formMode: string = 'ADD';

  constructor(private dashboardFacadeService: DashboardFacadeService) {}

  ngOnInit(): void {
    this.listenForFormChanges();
    this.initProductEdit(this.editProduct);
  }

  onSubmit(): void {
    if (this.modifyProductForm.valid) {
      this.dashboardFacadeService.addOrModifyProduct(this.modifyProductForm.value, this.editProductId).subscribe(
        (data) => {
          this.onSaveComplete.emit(true);
        },
        () => {
          this.onSaveComplete.emit(false);
        }
      );
    } else {
      this.formErrors = true;
    }
  }

  private listenForFormChanges() {
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

  private initProductEdit(editProduct: Product) {
    if (editProduct) {
      this.modifyProductForm.initEditForm(editProduct);
      this.formMode = 'EDIT';
      this.editProductId = editProduct.id;
      this.altUnit = true;
    }
  }
}
