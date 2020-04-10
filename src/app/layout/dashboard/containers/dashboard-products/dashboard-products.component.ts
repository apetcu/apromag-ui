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

  onSaveComplete($event) {
    this.toasterService.success('Produs modificat cu succes', '', {
      positionClass: 'toast-bottom-right',
      timeOut: 5000
    });
  }

  toggleAddProduct() {
    this.addProductToggled = !this.addProductToggled;
  }
}
