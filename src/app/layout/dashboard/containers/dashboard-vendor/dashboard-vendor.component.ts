import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user/services/user.service';
import { User } from '../../../user/models/user.model';
import { VendorProfilePictureForm } from './vendor-profile-picture-form';
import { DashboardFacadeService } from '../../services/dashboard-facade.service';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { VendorGalleryForm } from './vendor-gallery-form';
import { VendorDetailsForm } from './vendor-details-form';
import { ToastrService } from 'ngx-toastr';
import { Image } from '../../../../shared/models/image.model';

@Component({
  selector: 'app-dashboard-vendor',
  templateUrl: './dashboard-vendor.component.html',
  styleUrls: ['./dashboard-vendor.component.scss']
})
export class DashboardVendorComponent implements OnInit {
  currentUser: User;
  vendorProfilePictureForm: VendorProfilePictureForm = new VendorProfilePictureForm();
  vendorGalleryForm: VendorGalleryForm = new VendorGalleryForm();
  vendorDetailsForm: VendorDetailsForm = new VendorDetailsForm();
  currentImages: Array<Image> = null;

  constructor(
    private userService: UserService,
    private dashboardFacadeService: DashboardFacadeService,
    private alertService: AlertService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getUser();
    this.currentImages = this.currentUser.vendor.images;
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
    this.dashboardFacadeService.uploadVendorImages(this.vendorGalleryForm.value).subscribe((user: User) => {
      this.alertService.showSuccess('Fotografiile au fost adaugate');
      this.vendorGalleryForm.reset();
      this.currentImages = user.vendor.images;
    });
  }

  updateVendorDetails() {
    this.dashboardFacadeService.uploadVendorImages(this.vendorDetailsForm.value).subscribe(() => {
      this.alertService.showSuccess('Detaliile au fost actualizate');
    });
  }

  deleteImage(id: number) {
    this.dashboardFacadeService.deleteVendorImage(id).subscribe(() => {
      this.toastrService.success('Fotografia a fost stearsa');
    });
  }
}
