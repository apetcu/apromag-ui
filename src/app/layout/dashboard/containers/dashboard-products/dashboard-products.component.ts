import { Component, OnInit } from '@angular/core';
import { PaginationInfo } from '../../../../shared/models/pagination-info.model';
import { DashboardFacadeService } from '../../services/dashboard-facade.service';
import { Product } from '../../../product/models/product';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from '../../../../shared/services/alert/alert.service';

@Component({
  selector: 'app-dashboard-products',
  templateUrl: './dashboard-products.component.html',
  styleUrls: ['./dashboard-products.component.scss']
})
export class DashboardProductsComponent implements OnInit {
  addProductToggled: boolean = false;
  editProduct: Product = null;
  loading: boolean = false;
  rowsPerPage: number = 10;
  totalRecords: number;
  products: Array<Product>;

  constructor(
    private dashboardFacadeService: DashboardFacadeService,
    private toasterService: ToastrService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.loadData(1);
  }

  loadData(pageNo: number) {
    this.loading = true;
    this.dashboardFacadeService.getProducts(new PaginationInfo(pageNo, this.rowsPerPage)).subscribe((data) => {
      this.products = data.content;
      this.totalRecords = data.totalElements;
      this.loading = false;
    });
  }

  onSaveComplete(saveSuccessful: boolean) {
    if (saveSuccessful) {
      this.alertService.show({
        position: 'top-end',
        icon: 'success',
        title: 'Produsul a fost ' + (this.editProduct ? 'modificat' : 'adaugat'),
        showConfirmButton: false,
        timer: 1500
      });
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
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sterge produsul'
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

  toggleAddProduct() {
    this.editProduct = null;
    this.addProductToggled = !this.addProductToggled;
  }
}
