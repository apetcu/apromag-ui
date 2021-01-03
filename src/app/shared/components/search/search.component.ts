import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SearchService } from './services/search.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchOpen: Observable<boolean>;
  searchForm: FormGroup = new FormGroup({
    query: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  @ViewChild('input')
  input: ElementRef;

  constructor(private searchService: SearchService, private router: Router) {}

  ngOnInit(): void {
    this.searchOpen = this.searchService.searchDisplayed.asObservable();

    this.searchOpen.subscribe((active) => {
      if (active) {
        this.input.nativeElement.focus();
      }
    });
  }

  hideSearch(): void {
    this.searchService.hideSearch();
  }

  onSearch(): void {
    this.router.navigate(['search', this.searchForm.controls.query.value]);
    this.searchForm.reset();
    this.searchService.hideSearch();
  }
}
