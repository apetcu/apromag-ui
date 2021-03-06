import { UserRoles } from './user-roles';
import { Vendor } from '../../vendor/models/vendor';

export class User {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
  fullName: string;

  phone: string;
  address: string;

  profilePicture: string;
  email: string;
  role: UserRoles;
  vendor?: Vendor;
  notifications: number;

  constructor(userResponse: any) {
    this.id = userResponse.id;
    this.createdAt = new Date(userResponse.createdAt);
    this.updatedAt = new Date(userResponse.updatedAt);
    this.firstName = userResponse.firstName;
    this.lastName = userResponse.lastName;
    this.fullName = userResponse.firstName + ' ' + userResponse.lastName;

    this.phone = userResponse.phone;
    this.address = userResponse.address || '';

    this.profilePicture = userResponse.profilePicture || 'assets/images/default_profile.png';
    if (userResponse.vendor) {
      this.profilePicture = userResponse.vendor.profilePicture || 'assets/images/default_profile.png';
    }

    this.email = userResponse.email;
    this.role = userResponse.role as UserRoles;
    if (userResponse.vendor) {
      this.vendor = new Vendor(userResponse.vendor);
    }

    this.notifications = userResponse.notifications;
  }

  isUserOfTypeVendor(): boolean {
    return this.role.toUpperCase() === UserRoles.VENDOR;
  }

  isUserOfTypeCustomer(): boolean {
    return this.role.toUpperCase() === UserRoles.CUSTOMER;
  }
}
