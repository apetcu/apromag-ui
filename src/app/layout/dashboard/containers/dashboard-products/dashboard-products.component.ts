import { Component, OnInit } from '@angular/core';
import { PaginationInfo } from '../../../../shared/models/pagination-info.model';
import { DashboardFacadeService } from '../../services/dashboard-facade.service';
import { Product } from '../../../product/models/product';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private dashboardFacadeService: DashboardFacadeService, private toasterService: ToastrService) {}

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
      this.toasterService.success('Produs modificat cu succes', '', {
        timeOut: 5000
      });
      this.addProductToggled = false;
      this.loadData(1);
    } else {
      this.toasterService.error('A aparut o eroare la modificarea produsului', '', {
        timeOut: 5000
      });
    }
  }

  onEditProduct(product: Product) {
    this.addProductToggled = true;
    this.editProduct = product;
  }

  onPageChange(event) {
    this.loadData(event.page + 1);
  }

  toggleAddProduct() {
    this.addProductToggled = !this.addProductToggled;
  }
}
