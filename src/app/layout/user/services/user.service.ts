import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { StorageService } from '../../../shared/services/storage/storage.service';
import { StorageLocations } from '../../../shared/services/storage/storage-locations';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { UserFacadeService } from './user-facade.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedUser: BehaviorSubject<User> = new BehaviorSubject(null);

  private userStorageKey: StorageLocations = StorageLocations.USER;
  private jwtStorageKey: StorageLocations = StorageLocations.JWT;
  private jwtKey: string = null;

  constructor(
    private storageService: StorageService,
    private toasterService: ToastrService,
    private userFacadeService: UserFacadeService
  ) {}

  initialize(): void {
    this.jwtKey = this.storageService.getItem(this.jwtStorageKey);
    const currentUser = this.storageService.getItem(this.userStorageKey);
    if (currentUser) {
      this.setUser(new User(currentUser));
      this.userFacadeService.getAccountDetails().subscribe((data) => {
        this.setUser(new User(data));
      });
    }
  }

  decreaseNotifications() {
    this.setLoggedInState(new User({ ...this.loggedUser.value, newOrders: this.loggedUser.value.newOrders-- }));
  }

  setUser(user: User): void {
    this.setLoggedInState(user);
    this.storageService.setItem(this.userStorageKey, user);
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
    this.storageService.removeItem(this.userStorageKey);
    this.storageService.removeItem(this.jwtStorageKey);
    this.setLoggedInState(null);

    this.toasterService.success('Te-ai deconectat cu succes', '', {
      positionClass: 'toast-bottom-right',
      timeOut: 5000
    });
  }

  private setLoggedInState(state: null | User): void {
    this.loggedUser.next(state);
  }
}
