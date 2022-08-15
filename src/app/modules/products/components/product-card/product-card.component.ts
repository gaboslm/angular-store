import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../types/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() RemoveProduct: Function = () => {};
  @Input() AddProductToCart: Function = () => {};
  @Input() i: number = 0;
  @Input() Product: Product = {id: '1', name: '', image: '' };
  @Input() isAdmin?: boolean;
  @Input() ProductsInCart: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }


}
