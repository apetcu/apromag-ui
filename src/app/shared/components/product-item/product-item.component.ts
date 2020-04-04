import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../layout/product/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
  displayType: string = 'grid';
  @Input()
  product: Product;
  @Output()
  onAddToCart: EventEmitter<Product> = new EventEmitter<Product>(null);

  constructor() {}

  ngOnInit(): void {}

  addToCart(product: Product): void {
    this.onAddToCart.emit(product);
  }
}
