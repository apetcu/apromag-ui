import { Component, Input, OnInit } from '@angular/core';
import { Vendor } from '../../../layout/vendor/models/vendor';
import { StorageService } from '../../services/storage/storage.service';
import { StorageLocations } from '../../services/storage/storage-locations';
import { UserService } from '../../../layout/user/services/user.service';
import { User } from '../../../layout/user/models/user.model';

@Component({
  selector: 'app-profile-completion-wizard',
  templateUrl: './profile-completion-wizard.component.html',
  styleUrls: ['./profile-completion-wizard.component.scss']
})
export class ProfileCompletionWizardComponent implements OnInit {
  @Input()
  vendor: Vendor;
  completionPercentage: number;
  isStatusHidden: boolean = false;
  incompleteSteps: Array<ProfileCompletionStep> = [];

  defaultSteps: Array<ProfileCompletionStep> = [
    {
      id: 'name',
      name: 'Completeaza date furnizor',
      action: 'dashboard/vendor',
      weight: 1,
      completed: true
    },
    {
      id: 'details.profilepicture',
      name: 'Adauga poza de profil',
      action: 'vendor',
      weight: 3,
      completed: false
    },
    {
      id: 'details.certificate',
      name: 'Adauga certificatul de producator',
      action: 'vendor',
      weight: 2,
      completed: false
    },
    {
      id: 'shipping',
      name: 'Actualizeaza informatii livrare',
      action: 'shipping',
      weight: 1,
      completed: false
    },
    {
      id: 'products',
      name: 'Adauga primul produs',
      action: 'products',
      weight: 2,
      completed: false
    }
  ];

  constructor(private storageService: StorageService, private userService: UserService) {}

  ngOnInit(): void {
    this.isStatusHidden = !!this.storageService.getItem(StorageLocations.COMPLETION_STATUS_HIDDEN);
    this.userService.userStateChanged().subscribe((userDetails) => {
      this.computePercentage(userDetails);
    });
  }

  toggleProfileCompletion() {
    this.isStatusHidden = !!!this.storageService.getItem(StorageLocations.COMPLETION_STATUS_HIDDEN);
    this.storageService.setItem(StorageLocations.COMPLETION_STATUS_HIDDEN, this.isStatusHidden);
  }

  computePercentage(user: User) {
    const steps = this.recalculateCompletedSteps(user ? user.vendor : null);
    let total = 0;
    let totalCompleted = 0;
    steps.forEach((entry) => {
      total += entry.weight;
      if (entry.completed) {
        totalCompleted += entry.weight;
      }
    });
    this.completionPercentage = Math.round((totalCompleted / total) * 100);
    this.incompleteSteps = this.defaultSteps.filter((entry) => !entry.completed);
  }

  recalculateCompletedSteps(vendor: Vendor): Array<ProfileCompletionStep> {
    if (!vendor) {
      return this.defaultSteps;
    }
    const actualSteps = [...this.defaultSteps];

    if (vendor.certificate) {
      actualSteps[actualSteps.findIndex((el) => el.id === 'details.certificate')].completed = true;
    }

    if (vendor.profilePicture) {
      actualSteps[actualSteps.findIndex((el) => el.id === 'details.profilepicture')].completed = true;
    }

    if (vendor.shippingPreferences.length && vendor.shippingCost) {
      actualSteps[actualSteps.findIndex((el) => el.id === 'shipping')].completed = true;
    }

    if (vendor.productsCount) {
      actualSteps[actualSteps.findIndex((el) => el.id === 'products')].completed = true;
    }

    return actualSteps;
  }
}

interface ProfileCompletionStep {
  id: string;
  name: string;
  action: string;
  weight: number;
  completed: boolean;
}
