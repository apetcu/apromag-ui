import { Component, OnInit } from '@angular/core';
import { VendorRegistrationForm } from './vendor-registration.form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-registration',
  templateUrl: './vendor-registration.component.html',
  styleUrls: ['./vendor-registration.component.scss']
})
export class VendorRegistrationComponent implements OnInit {
  vendorRegistrationForm: VendorRegistrationForm = new VendorRegistrationForm();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.router.navigate(['auth', 'register'], {
      queryParams: this.vendorRegistrationForm.value
    });
  }
}
