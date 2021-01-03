import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Vendor } from '../../../vendor/models/vendor';
import { ShippingFacadeService } from '../../../../shared/services/shipping/shipping-facade.service';
import { ShippingLocation } from '../../../../shared/models/shipping-location';
import { Image } from '../../../../shared/models/image.model';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-vendor-information',
  templateUrl: './vendor-information.component.html',
  styleUrls: ['./vendor-information.component.scss']
})
export class VendorInformationComponent implements OnChanges {
  @Input()
  vendor: Vendor;

  shippingLocations: Array<ShippingLocation> = [];
  album: any = [];

  constructor(private shippingFacadeService: ShippingFacadeService, private lightBoxService: Lightbox) {}

  ngOnChanges(changes: SimpleChanges) {
    this.getShippingLocations();
  }

  openGallery(index: number): void {
    this.lightBoxService.open(this.album, index);
  }

  getShippingLocations() {
    this.buildVendorImageGallery(this.vendor.images);
    let vendorShippingLocations = this.vendor.shippingPreferences.map((entry) => entry.locationId);
    this.shippingFacadeService.getShippingLocations('').subscribe((locations) => {
      this.shippingLocations = locations.filter((entry) => vendorShippingLocations.includes(parseInt(entry.id)));
    });
  }

  private buildVendorImageGallery(images: Array<Image>) {
    this.album = images.map((entry, key) => ({
      src: entry.url,
      caption: 'Imagine ' + (key + 1),
      thumb: entry.url
    }));
  }
}
