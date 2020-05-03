import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ModifyProductForm } from './modify-product-form';
import { DashboardFacadeService } from '../../services/dashboard-facade.service';
import { Product } from '../../../product/models/product';
import { Category } from '../../../categories/models/category.model';
import { UserSettingsForm } from '../../../user/components/user-settings/user-settings-form';

@Component({
  selector: 'app-dashboard-modify-product',
  templateUrl: './dashboard-modify-product.component.html',
  styleUrls: ['./dashboard-modify-product.component.scss']
})
export class DashboardModifyProductComponent implements OnInit, OnChanges {
  @Output()
  onSaveComplete: EventEmitter<any> = new EventEmitter<any>(null);
  @Output()
  onDeleteProduct: EventEmitter<any> = new EventEmitter<any>(null);

  @Input()
  editProduct: Product = null;
  @Input()
  categoryList: Array<Category>;
  editProductId: number = null;
  modifyProductForm: ModifyProductForm;

  altUnit: boolean = false;
  formErrors = false;
  formMode: string = 'ADD';

  constructor(private dashboardFacadeService: DashboardFacadeService) {}

  ngOnInit(): void {
    this.initProductEdit(this.editProduct);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.editProduct) {
      this.listenForFormChanges();
      this.initProductEdit(changes.editProduct.currentValue);
    }
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

  deleteProduct(product: Product): void {
    this.onDeleteProduct.next(product);
  }

  private listenForFormChanges() {
    this.modifyProductForm.controls['unit'].valueChanges.subscribe((value) => {
      if (!value) {
        this.altUnit = true;
      }
    });

    this.modifyProductForm.valueChanges.subscribe(() => {
      this.formErrors = false;
    });
  }

  private initProductEdit(editProduct: Product) {
    if (editProduct) {
      this.formMode = 'EDIT';
      this.editProductId = editProduct.id;
      this.altUnit = true;
    }

    this.modifyProductForm = new ModifyProductForm(editProduct || new Product({}));
    this.listenForFormChanges();
  }
}
