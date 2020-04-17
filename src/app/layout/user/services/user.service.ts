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
  private userStorageKey: StorageLocations = StorageLocations.USER;
  private jwtStorageKey: StorageLocations = StorageLocations.JWT;
  private currentUser: User = null;
  private loginState: BehaviorSubject<User> = new BehaviorSubject(null);
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
      this.userFacadeService.getAccountDetails().subscribe((data) => {
        this.setUser(new User(data));
      });
    }
  }

  setUser(user: User): void {
    this.currentUser = user;
    this.setLoggedInState(this.currentUser);
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

  logOut(): void {
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

  private setLoggedInState(state: null | User): void {
    this.loginState.next(state);
  }
}
