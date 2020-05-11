import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from '../../models/vendor';
import { VendorsFacadeService } from '../../services/vendors-facade.service';
import { Product } from '../../../product/models/product';
import { ProductListConfig, ProductListDisplayModes } from '../../../../shared/components/product-list/product-list-config';
import { map } from 'rxjs/operators';
import { PaginatedResponse } from '../../../../shared/models/paginated-response';
import { Image } from '../../../../shared/models/image.model';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-vendor-products',
  templateUrl: './vendor-products.component.html',
  styleUrls: ['./vendor-products.component.scss']
})
export class VendorProductsComponent implements OnInit {
  vendorDetails: Vendor;
  products: Array<Product>;
  album: any = [];
  productsLoading: boolean = true;

  productListConfig: ProductListConfig = {
    totalPages: 100,
    totalRecords: 1000,
    currentPage: 1,
    defaultDisplayMode: ProductListDisplayModes.GRID,
    displayHeader: false,
    paginated: false
  };

  constructor(private vendorsFacadeService: VendorsFacadeService, private route: ActivatedRoute, private lightBoxService: Lightbox) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const vendorId = parseInt(params.vendorId, 10);
      this.getVendorDetails(vendorId);
      this.getVendorProducts(vendorId);
    });
  }

  openGallery(index: number): void {
    this.lightBoxService.open(this.album, index);
    console.log('GALLERY');
  }

  private getVendorDetails(id: number) {
    this.vendorsFacadeService.getVendorById(id).subscribe((vendorInfo) => {
      this.vendorDetails = vendorInfo;
      this.buildVendorImageGallery(this.vendorDetails.images);
    });
  }

  private getVendorProducts(id: number) {
    this.vendorsFacadeService.getVendorProducts(id).subscribe((products) => {
      this.productsLoading = false;
      this.products = products.data;
    });
  }

  private buildVendorImageGallery(images: Array<Image>) {
    this.album = images.map((entry, key) => ({
      src: entry.url,
      caption: 'Imagine ' + key,
      thumb: entry.url
    }));
  }
}
