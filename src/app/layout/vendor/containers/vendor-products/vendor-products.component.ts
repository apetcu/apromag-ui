import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from '../../models/vendor';
import { VendorsFacadeService } from '../../services/vendors-facade.service';
import { Product } from '../../../product/models/product';
import { ProductListConfig, ProductListDisplayModes } from '../../../../shared/components/product-list/product-list-config';
import { map } from 'rxjs/operators';
import { PaginatedResponse } from '../../../../shared/models/paginated-response';

@Component({
  selector: 'app-vendor-products',
  templateUrl: './vendor-products.component.html',
  styleUrls: ['./vendor-products.component.scss']
})
export class VendorProductsComponent implements OnInit {
  vendorDetails: Vendor;
  products: Array<Product>;
  productsLoading: boolean = true;

  productListConfig: ProductListConfig = {
    totalPages: 100,
    totalRecords: 1000,
    currentPage: 1,
    defaultDisplayMode: ProductListDisplayModes.GRID,
    displayHeader: false,
    paginated: false
  };

  constructor(private vendorsFacadeService: VendorsFacadeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const vendorId = parseInt(params.vendorId, 10);
      this.getVendorDetails(vendorId);
      this.getVendorProducts(vendorId);
    });
  }

  private getVendorDetails(id: number) {
    this.vendorsFacadeService.getVendorById(id).subscribe((vendorInfo) => {
      this.vendorDetails = vendorInfo;
    });
  }
  private getVendorProducts(id: number) {
    this.vendorsFacadeService.getVendorProducts(id).subscribe((products) => {
      this.productsLoading = false;
      this.products = products.data;
    });
  }
}
