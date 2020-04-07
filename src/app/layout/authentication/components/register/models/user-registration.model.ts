import { UserRoles } from '../../../../user/models/user-roles';

export class UserRegistration {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRoles;
  vendor?: VendorRegistration;

  constructor(userRegistrationForm: any) {
    this.email = userRegistrationForm.email;
    this.firstName = userRegistrationForm.firstName;
    this.lastName = userRegistrationForm.lastName;
    this.password = userRegistrationForm.password;
    this.role = userRegistrationForm.role;
    if (userRegistrationForm.businessName) {
      this.vendor = new VendorRegistration(userRegistrationForm);
    }
  }
}

class VendorRegistration {
  businessName: string;
  address?: string;
  location?: string;

  constructor(userRegistrationForm: any) {
    this.businessName = userRegistrationForm.businessName;
    this.address = userRegistrationForm.address;
    this.location = userRegistrationForm.location;
  }
}
