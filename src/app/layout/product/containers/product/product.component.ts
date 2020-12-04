import { Component, OnInit } from '@angular/core';
import { VendorsFacadeService } from '../../../vendor/services/vendors-facade.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsFacadeService } from '../../services/products-facade.service';
import { Vendor } from '../../../vendor/models/vendor';
import { FormGroup } from '@angular/forms';
import { AddToCartForm } from './add-to-cart.form';
import { CartService } from '../../../cart/services/cart.service';
import { Lightbox } from 'ngx-lightbox';
import { Image } from '../../../../shared/models/image.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  addToCartForm: FormGroup = new AddToCartForm();
  productInformationLoading: boolean = true;
  selectedTab: number = 1;
  album: Array<any>;

  productDetails: Product;
  vendorDetails: Vendor;

  relatedProductsLoading: boolean = true;
  relatedProducts: Array<Product>;

  constructor(
    private vendorsFacadeService: VendorsFacadeService,
    private productsFacadeService: ProductsFacadeService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private lightBoxService: Lightbox
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = parseInt(params.productId, 10);
      this.getProductInformation(productId);
    });
  }

  addToCart(details: Product): void {
    this.cartService.addItem(details, parseInt(this.addToCartForm.get('quantity').value, 10));
  }

  selectTab(index: number): void {
    this.selectedTab = index;
  }

  openGallery(index: number): void {
    this.lightBoxService.open(this.album, index);
  }

  private getProductInformation(productId: number) {
    this.productsFacadeService.getProductById(productId).subscribe((productInfo) => {
      this.productDetails = productInfo;
      this.productInformationLoading = false;

      this.buildImageGallery(this.productDetails.images);

      this.getVendorDetails(productInfo.vendorId);
      this.getVendorProducts(productInfo.vendorId);
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
      this.relatedProducts = products.data;
    });
  }

  private buildImageGallery(images: Array<Image>) {
    this.album = images.map((entry, key) => ({
      src: entry.url,
      caption: 'Imagine ' + key,
      thumb: entry.url
    }));
  }
}
