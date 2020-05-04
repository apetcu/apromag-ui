import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user/services/user.service';
import { User } from '../../../user/models/user.model';
import { VendorProfilePictureForm } from './vendor-profile-picture-form';
import { DashboardFacadeService } from '../../services/dashboard-facade.service';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { VendorGalleryForm } from './vendor-gallery-form';

@Component({
  selector: 'app-dashboard-vendor',
  templateUrl: './dashboard-vendor.component.html',
  styleUrls: ['./dashboard-vendor.component.scss']
})
export class DashboardVendorComponent implements OnInit {
  currentUser: User;
  vendorProfilePictureForm: VendorProfilePictureForm = new VendorProfilePictureForm();
  vendorGalleryForm: VendorGalleryForm = new VendorGalleryForm();

  constructor(
    private userService: UserService,
    private dashboardFacadeService: DashboardFacadeService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getUser();
  }

  handleFileInput(file) {
    this.vendorProfilePictureForm.controls['profilePicture'].patchValue(file);
  }

  changeProfilePicture() {
    this.dashboardFacadeService.updateProfilePicture(this.vendorProfilePictureForm.value).subscribe(() => {
      this.alertService.showSuccess('Fotografia de profil a fost modificata');
      this.vendorProfilePictureForm.reset();
    });
  }

  uploadVendorImages() {
    this.dashboardFacadeService.uploadVendorImages(this.vendorGalleryForm.value).subscribe(() => {
      this.alertService.showSuccess('Fotografiile au fost adaugate');
      this.vendorProfilePictureForm.reset();
    });
  }
}
