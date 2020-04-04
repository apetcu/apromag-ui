import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from '../../models/vendor';
import { VendorsFacadeService } from '../../services/vendors-facade.service';
import { Product } from '../../../../shared/models/product';

@Component({
  selector: 'app-vendor-products',
  templateUrl: './vendor-products.component.html',
  styleUrls: ['./vendor-products.component.scss']
})
export class VendorProductsComponent implements OnInit {
  vendorDetails: Vendor;
  products: Array<Product>;
  productsLoading: boolean = true;
  displayType: string = 'grid';

  constructor(private vendorsFacadeService: VendorsFacadeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getVendorDetails(parseInt(params.vendorId, 10));
      this.getVendorProducts(parseInt(params.vendorId, 10));
    });
  }

  setListType(type: string) {
    this.displayType = type;
  }

  private getVendorDetails(id: number) {
    this.vendorsFacadeService.getVendorById(id).subscribe((vendorInfo) => {
      this.vendorDetails = vendorInfo;
    });
  }
  private getVendorProducts(id: number) {
    this.vendorsFacadeService.getVendorProducts(id).subscribe((products) => {
      this.productsLoading = false;
      this.products = products;
    });
  }
}
