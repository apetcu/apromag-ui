import { Component, OnInit } from '@angular/core';
import { SearchService } from './services/search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchOpen: Observable<boolean>;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchOpen = this.searchService.searchDisplayed.asObservable();
  }

  hideSearch(): void {
    this.searchService.hideSearch();
  }
}
