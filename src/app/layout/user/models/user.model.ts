import { UserRoles } from '../../../shared/models/user-roles';

export class User {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
  profilePicture: string;
  email: string;
  role: UserRoles;
  vendor: null;
  newOrders: number;

  constructor(userResponse: any) {
    this.id = userResponse.id;
    this.createdAt = new Date(userResponse.createdAt);
    this.updatedAt = new Date(userResponse.updatedAt);
    this.firstName = userResponse.first;
    this.lastName = userResponse.lastName;
    this.profilePicture = userResponse.profilePicture;
    this.email = userResponse.email;
    this.role = userResponse.role as UserRoles;
    this.vendor = userResponse.vendor;
    this.newOrders = 3;
  }
}
