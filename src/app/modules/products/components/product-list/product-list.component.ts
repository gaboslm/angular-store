import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../types/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() RemoveProduct: Function = () => {};
  @Input() AddProductToCart: Function = () => {};
  @Input() ProductList: Product[] = [];
  @Input() isAdmin: boolean = false;
  @Input() ProductsInCart: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }


}
