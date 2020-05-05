import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { StorageService } from '../../../shared/services/storage/storage.service';
import { StorageLocations } from '../../../shared/services/storage/storage-locations';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserFacadeService } from './user-facade.service';
import { Vendor } from '../../vendor/models/vendor';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedUser: BehaviorSubject<User> = new BehaviorSubject(null);
  private activeNotificationsSubject: BehaviorSubject<number> = new BehaviorSubject(0);
  private jwtStorageKey: StorageLocations = StorageLocations.JWT;
  private jwtKey: string = null;

  constructor(private storageService: StorageService, private userFacadeService: UserFacadeService) {}

  initialize(): Promise<any> {
    this.jwtKey = this.storageService.getItem(this.jwtStorageKey);
    if (this.jwtKey) {
      return this.userFacadeService
        .getAccountDetails()
        .toPromise()
        .then((data) => {
          this.setUser(new User(data));
          return Promise.resolve();
        });
    } else {
      return Promise.resolve();
    }
  }

  decreaseNotifications() {
    this.activeNotificationsSubject.next(this.activeNotificationsSubject.value - 1);
  }

  getNotificationCount() {
    return this.activeNotificationsSubject.asObservable();
  }

  setUser(user: User): void {
    this.setLoggedInState(user);
    this.activeNotificationsSubject.next(user.notifications);
  }

  setJwt(key: string): void {
    this.storageService.setItem(this.jwtStorageKey, key);
    this.jwtKey = key;
  }

  getJwt(): string {
    return this.jwtKey;
  }

  getUser(): User {
    return this.loggedUser.value;
  }

  isUserLoggedIn(): boolean {
    return !!this.loggedUser.value;
  }

  isUserOfTypeVendor(): boolean {
    return this.loggedUser.value && this.loggedUser.value.isUserOfTypeVendor();
  }

  isUserOfTypeCustomer(): boolean {
    return this.loggedUser.value && this.loggedUser.value.isUserOfTypeCustomer();
  }

  loginStateChanged(): Observable<null | User> {
    return this.loggedUser.asObservable();
  }

  logOut(): void {
    this.jwtKey = null;
    this.storageService.removeItem(this.jwtStorageKey);
    this.setLoggedInState(null);
  }

  private setLoggedInState(state: null | User): void {
    this.loggedUser.next(state);
  }
}
