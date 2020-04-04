import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input()
  rating: number = 5;
  @Input()
  ratingCount: number;
  normalizedRating: number;

  constructor() {}

  ngOnInit(): void {
    this.normalizedRating = Math.round(this.rating);
  }
}
