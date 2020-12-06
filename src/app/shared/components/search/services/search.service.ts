import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchDisplayed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  showSearch() {
    this.searchDisplayed.next(true);
  }

  hideSearch() {
    this.searchDisplayed.next(false);
  }
}
