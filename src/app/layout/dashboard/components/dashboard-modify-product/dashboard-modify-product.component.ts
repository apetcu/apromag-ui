import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ModifyProductForm } from './modify-product-form';
import { DashboardFacadeService } from '../../services/dashboard-facade.service';
import { Product } from '../../../product/models/product';
import { Category } from '../../../categories/models/category.model';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../user/services/user.service';
import { CategoriesFacadeService } from '../../../categories/services/categories-facade.service';
import { Validators } from '@angular/forms';

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
  categoryList: Array<Category>;
  categoryItems: Array<CategoryItem>;

  editProductId: number = null;
  modifyProductForm: ModifyProductForm;

  altUnit: boolean = false;
  modifyLoading: boolean = false;

  formErrors = false;
  formMode: string = 'ADD';

  constructor(
    private dashboardFacadeService: DashboardFacadeService,
    private categoriesFacadeService: CategoriesFacadeService,
    private toastrService: ToastrService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.initProductEdit(this.editProduct);
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesFacadeService.getCategories().subscribe((categories) => {
      this.categoryList = categories;
      this.categoryItems = categories.map((category) => new CategoryItem(category));
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.editProduct) {
      this.initProductEdit(changes.editProduct.currentValue);
      this.listenForFormChanges();
    }
  }

  onSubmit(): void {
    if (this.modifyProductForm.valid) {
      this.modifyLoading = true;
      this.dashboardFacadeService.addOrModifyProduct(this.modifyProductForm.value, this.editProductId).subscribe(
        (data) => {
          this.onSaveComplete.emit(true);

          if (!this.editProductId) {
            const user = this.userService.getUser();
            user.vendor.productsCount++;
            this.userService.setUser(user);
          }
        },
        () => {
          this.onSaveComplete.emit(false);
          this.modifyLoading = false;
        }
      );
    } else {
      this.formErrors = true;
    }
  }

  deleteProduct(product: Product): void {
    this.onDeleteProduct.next(product);
  }

  deleteImage(id: number) {
    this.dashboardFacadeService.deleteProductImage(this.editProductId, id).subscribe(
      () => {},
      () => {
        this.toastrService.error('A aparut o eroare la stergerea fotografiei');
      }
    );
  }

  private listenForFormChanges() {
    this.modifyProductForm.controls['unit'].valueChanges.subscribe((value) => {
      if (!value) {
        this.altUnit = true;
        this.modifyProductForm.get('altUnit').setValidators([Validators.required]);
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
      this.modifyProductForm.get('altUnit').setValidators([Validators.required]);
    }

    this.modifyProductForm = new ModifyProductForm(editProduct || new Product({}));
    this.listenForFormChanges();
  }
}

class CategoryItem {
  label: string;
  value: number;
  items: Array<CategoryItem>;

  constructor(category: Category) {
    this.label = category.name;
    this.value = category.id;
    this.items = category.children.map((category) => new CategoryItem(category));
  }
}
