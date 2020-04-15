import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { ShippingLocation } from '../../../shared/models/shipping-location';
import { ShippingFacadeService } from '../../../shared/services/shipping/shipping-facade.service';
import { ShippingService } from '../../../shared/services/shipping/shipping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shippingLocations: Array<ShippingLocation>;

  constructor(private shippingFacadeService: ShippingFacadeService, private shippingService: ShippingService, private router: Router) {}

  ngOnInit(): void {}

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
