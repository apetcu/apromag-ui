import { Injectable } from '@angular/core';
import { StorageLocations } from './storage-locations';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storagePrefix = 'apro_';

  constructor() {}

  getItem(key: StorageLocations): any {
    const storageValue = localStorage.getItem(this.storagePrefix + key);
    try {
      return JSON.parse(storageValue);
    } catch (e) {
      return storageValue;
    }
  }

  setItem(key: StorageLocations, value: any) {
    let storedItem;
    try {
      storedItem = JSON.stringify(value);
    } catch (e) {
      storedItem = value;
    }
    localStorage.setItem(this.storagePrefix + key, storedItem);
  }

  removeItem(key: StorageLocations) {
    localStorage.removeItem(this.storagePrefix + key);
  }
}
