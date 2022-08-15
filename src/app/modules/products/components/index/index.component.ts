import { Component, OnInit } from '@angular/core';
import { Product } from '../../types/product.model';

@Component({
  selector: 'products-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  ProductsInCart: string[] = [];
  ProductList: Product[] = [];
  isAdmin: boolean = false;

  constructor() {
    this.ProductList = JSON.parse(localStorage.getItem('products') || '[]' as string)
  }

  ngOnInit(): void {
  }

  AddProduct(product: Product): void {
    product.id = this.GenerateKey();
    this.ProductList.push(product);
    localStorage.setItem('products', JSON.stringify(this.ProductList))
  }

  RemoveProduct(id: string): void{
    this.ProductList = this.ProductList.filter(product => product.id !== id)
    localStorage.setItem('products', JSON.stringify(this.ProductList));
  }

  AddProductToCart(id: string): void{
    const ProductAlreadyAdded = this.ProductsInCart.includes(id)
    if(!ProductAlreadyAdded) this.ProductsInCart.push(id);
  }

  GenerateKey(): string{
    return new Date().getTime().toString() + Math.random().toString(10).substr(2, 5);
  }
}
