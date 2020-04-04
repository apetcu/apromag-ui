import { Component, OnInit } from '@angular/core';
import { VendorsFacadeService } from '../../../vendors/services/vendors-facade.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsFacadeService } from '../../services/products-facade.service';
import { Vendor } from '../../../vendors/models/vendor';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productDetails: Product;
  vendorDetails: Vendor;

  relatedProductsLoading: boolean = true;
  relatedProducts: Array<Product>;

  constructor(
    private vendorsFacadeService: VendorsFacadeService,
    private productsFacadeService: ProductsFacadeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = parseInt(params.productId, 10);
      const vendorId = parseInt(params.vendorId, 10);

      this.getVendorDetails(vendorId);
      this.getVendorProducts(vendorId);
      this.getProductInformation(productId);
    });
  }

  private getProductInformation(productId: number) {
    this.productsFacadeService.getProductById(productId).subscribe((vendorInfo) => {
      this.productDetails = vendorInfo;
    });
  }

  private getVendorDetails(vendorId: number) {
    this.vendorsFacadeService.getVendorById(vendorId).subscribe((vendorInfo) => {
      this.vendorDetails = vendorInfo;
    });
  }
  private getVendorProducts(vendorId: number) {
    this.vendorsFacadeService.getVendorProducts(vendorId).subscribe((products) => {
      this.relatedProductsLoading = false;
      this.relatedProducts = products;
    });
  }
}
