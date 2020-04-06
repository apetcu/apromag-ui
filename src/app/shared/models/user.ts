import { UserRoles } from './user-roles';

export class User {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRoles;
  vendor: null;

  constructor(userResponse: any) {
    this.id = userResponse.id;
    this.createdAt = new Date(userResponse.createdAt);
    this.updatedAt = new Date(userResponse.updatedAt);
    this.firstName = userResponse.first;
    this.lastName = userResponse.lastName;
    this.email = userResponse.email;
    this.role = userResponse.role as UserRoles;
    this.vendor = userResponse.vendor;
  }
}
