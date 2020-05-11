import { Component, OnInit } from '@angular/core';
import { ShippingLocation } from '../../../shared/models/shipping-location';
import { ShippingFacadeService } from '../../../shared/services/shipping/shipping-facade.service';
import { ShippingService } from '../../../shared/services/shipping/shipping.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shippingLocations: Array<ShippingLocation>;

  constructor(
    private shippingFacadeService: ShippingFacadeService,
    private shippingService: ShippingService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

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
