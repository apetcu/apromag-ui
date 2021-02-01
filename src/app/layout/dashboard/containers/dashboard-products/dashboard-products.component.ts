import { Component, OnInit } from '@angular/core';
import { PaginationInfo } from '../../../../shared/models/pagination-info.model';
import { DashboardFacadeService } from '../../services/dashboard-facade.service';
import { Product } from '../../../product/models/product';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { CategoriesFacadeService } from '../../../categories/services/categories-facade.service';
import { Category } from '../../../categories/models/category.model';

@Component({
  selector: 'app-dashboard-products',
  templateUrl: './dashboard-products.component.html',
  styleUrls: ['./dashboard-products.component.scss']
})
export class DashboardProductsComponent implements OnInit {
  addProductToggled: boolean = false;
  editProduct: Product = null;
  loading: boolean = true;
  rowsPerPage: number = 15;
  currentPage: number = 0;
  totalRecords: number;
  products: Array<Product>;

  categoryList: Array<Category>;

  constructor(
    private dashboardFacadeService: DashboardFacadeService,
    private categoriesFacadeService: CategoriesFacadeService,
    private toasterService: ToastrService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.loadData(1);
    this.loadCategories();
  }

  loadCategories() {
    this.categoriesFacadeService.getCategories().subscribe((categories) => {
      this.categoryList = categories;
    });
  }

  loadData(pageNo: number) {
    this.currentPage = pageNo - 1;
    this.dashboardFacadeService.getProducts(new PaginationInfo(pageNo, this.rowsPerPage)).subscribe((data) => {
      this.products = data.data;
      this.totalRecords = data.pagination.totalCount;
      this.loading = false;
    });
  }

  onSaveComplete(saveSuccessful: boolean) {
    if (saveSuccessful) {
      this.alertService.showSuccess('Produsul a fost ' + (this.editProduct ? 'modificat' : 'adaugat'));
      this.addProductToggled = false;
      this.loadData(1);
    } else {
      this.toasterService.error('A aparut o eroare la modificarea produsului', '', {
        timeOut: 5000
      });
    }
  }

  onDeleteProduct(product: Product) {
    this.alertService
      .show({
        icon: 'warning',
        title: 'Esti sigur ca vrei sa stergi acest produs?',
        text: 'Odata sters, acesta nu va mai fi disponibil pentru clienti',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#2f2f2f',
        confirmButtonText: 'Sterge produsul',
        cancelButtonText: 'Anuleaza'
      })
      .subscribe((data) => {
        if (data.value) {
          this.dashboardFacadeService.deleteProduct(product.id).subscribe(() => {
            this.editProduct = null;
            this.addProductToggled = false;
            this.loadData(1);
            this.alertService.show({
              position: 'top-end',
              icon: 'success',
              title: 'Produsul a fost sters',
              showConfirmButton: false,
              timer: 1500
            });
          });
        }
      });
  }

  onEditProduct(product: Product) {
    this.addProductToggled = true;
    this.editProduct = product;
  }

  onPageChange(event) {
    this.loadData(event.page + 1);
  }

  displayAddProduct() {
    this.editProduct = null;
    this.addProductToggled = true;
  }
}
