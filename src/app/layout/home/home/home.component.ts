import { Component, OnInit } from '@angular/core';
import { ShippingLocation } from '../../../shared/models/shipping-location';
import { ShippingFacadeService } from '../../../shared/services/shipping/shipping-facade.service';
import { ShippingService } from '../../../shared/services/shipping/shipping.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user/services/user.service';
import { homeSliderCategories, HomeSliderCategoryItem } from './models/categories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shippingLocations: Array<ShippingLocation>;
  sliderCategories: Array<HomeSliderCategoryItem> = homeSliderCategories;
  sliderResponsiveOptions: Array<any>;

  constructor(
    private shippingFacadeService: ShippingFacadeService,
    private shippingService: ShippingService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
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
          this.router.navigate(['/home']);
        });
      }
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
