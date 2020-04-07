import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { StorageService } from '../../../shared/services/storage/storage.service';
import { StorageLocations } from '../../../shared/services/storage/storage-locations';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userStorageKey = StorageLocations.USER;
  private jwtStorageKey = StorageLocations.JWT;
  private currentUser: User = null;
  private loginState: BehaviorSubject<null | User> = new BehaviorSubject<null | User>(null);
  private jwtKey = null;

  constructor(private storageService: StorageService, private toasterService: ToastrService) {}

  initialize() {
    const currentUser = this.storageService.getItem(this.userStorageKey);
    if (currentUser) {
      this.setUser(new User(currentUser));
      this.setJwt(this.storageService.getItem(this.jwtStorageKey));
    }
  }

  setUser(user: User) {
    this.currentUser = user;
    this.setLoggedInState(this.currentUser);
    this.storageService.setItem(this.userStorageKey, user);
  }

  setJwt(key: string) {
    this.storageService.setItem(this.jwtStorageKey, key);
    this.jwtKey = key;
  }

  getJwt() {
    return this.jwtKey;
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
    this.jwtKey = null;
    this.storageService.removeItem(this.userStorageKey);
    this.storageService.removeItem(this.jwtStorageKey);
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
