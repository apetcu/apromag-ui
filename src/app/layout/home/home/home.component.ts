import { Component, OnInit } from '@angular/core';
import { ShippingLocation } from '../../../shared/models/shipping-location';
import { ShippingFacadeService } from '../../../shared/services/shipping/shipping-facade.service';
import { ShippingService } from '../../../shared/services/shipping/shipping.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user/services/user.service';
import { Vendor } from '../../vendor/models/vendor';
import { VendorsFacadeService } from '../../vendor/services/vendors-facade.service';
import { CategoriesFacadeService } from '../../categories/services/categories-facade.service';
import { Category } from '../../categories/models/category.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shippingLocations: Array<ShippingLocation>;
  sliderCategories: Array<Category>;
  sliderResponsiveOptions: Array<any>;

  popularVendors: Array<Vendor> = [];

  constructor(
    private shippingFacadeService: ShippingFacadeService,
    private categoriesFacadeService: CategoriesFacadeService,
    private shippingService: ShippingService,
    private vendorsFacadeService: VendorsFacadeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toasterService: ToastrService,
    private userService: UserService
  ) {
    this.sliderResponsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 6,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 6,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['token']) {
        this.userService.initialize(params['token']).then(() => {
          this.router.navigate(['/home'], { queryParams: {} });
          this.toasterService.success('', 'Te-ai logat cu succes', {
            positionClass: 'toast-bottom-right',
            timeOut: 3000
          });
        });
      }
    });

    this.vendorsFacadeService.getPopular().subscribe((popularVendors) => {
      this.popularVendors = popularVendors.data;
    });

    this.categoriesFacadeService.getHomepageCategories().subscribe((categories) => {
      this.sliderCategories = categories;
    });
  }

  filterCity(event) {
    this.shippingFacadeService.getShippingLocations(event.query).subscribe((locations) => {
      this.shippingLocations = locations;
    });
  }

  selectLocation(event) {
    this.shippingService.setShippingLocation(event);
    this.router.navigate(['/vendor']);
  }
}
