import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { StorageService } from '../../../shared/services/storage/storage.service';
import { StorageLocations } from '../../../shared/services/storage/storage-locations';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { UserRoles } from '../models/user-roles';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userStorageKey = StorageLocations.USER;
  private currentUser: User = null;
  private loginState: BehaviorSubject<null | User> = new BehaviorSubject<null | User>(null);

  constructor(private storageService: StorageService, private toasterService: ToastrService) {}

  initialize() {
    const currentUser = this.storageService.getItem(this.userStorageKey);
    if (currentUser) {
      this.setUser(new User(currentUser));
    }
  }

  setUser(user: User) {
    this.currentUser = user;
    this.storageService.setItem(this.userStorageKey, user);
    this.setLoggedInState(this.currentUser);
  }

  getUser(): User {
    return this.currentUser;
  }

  isUserLoggedIn(): boolean {
    return !!this.currentUser;
  }

  isUserOfTypeVendor(): boolean {
    return this.currentUser && this.currentUser.isUserOfTypeVendor();
  }

  isUserOfTypeCustomer(): boolean {
    return this.currentUser && this.currentUser.isUserOfTypeCustomer();
  }

  loginStateChanged(): Observable<null | User> {
    return this.loginState.asObservable();
  }

  logOut() {
    this.currentUser = null;
    this.storageService.removeItem(this.userStorageKey);
    this.setLoggedInState(null);

    this.toasterService.success('Te-ai deconectat cu succes', '', {
      positionClass: 'toast-bottom-right',
      timeOut: 5000
    });
  }

  private setLoggedInState(state: null | User) {
    this.loginState.next(state);
  }
}
