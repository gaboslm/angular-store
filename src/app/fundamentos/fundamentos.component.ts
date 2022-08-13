import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { errors } from '../form-errors';
import { FirstErrorPipe } from '../pipes/first-error.pipe';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-fundamentos',
  templateUrl: './fundamentos.component.html',
  styleUrls: ['./fundamentos.component.scss']
})
export class FundamentosComponent implements OnInit {

  ngOnInit(): void {
  }

  firstError: FirstErrorPipe = new FirstErrorPipe();
  name = '';
  names: string[] = [ '😂', '🐦', '🐳', '🌮', '💚'];
  loading: boolean = false;

  person: {
    name: string
    image: string
    age: number
    percentage: number
  } = {
    name: 'Gabriel',
    image: 'https://picsum.photos/100/100',
    age: 23,
    percentage: 80,
  };

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]
  constructor(){
    setTimeout(() => {
      this.loading = true;
    }, 50);
  }

  increase(){
    this.person.percentage += 10;
  }

  decrease(){
    this.person.percentage -= 10;
  }

  changeName(event: Event){
    this.person.name = (<HTMLInputElement>event.target).value;
  }

  removeProduct(index: number): void{
    this.products.splice(index, 1);
  }

  addNewName(valid: boolean|null): void{
    if(!valid) return

    this.names.push(this.name);
    this.name = '';
  }

  removeName(index: number): void{
    this.names.splice(index, 1);
  }

  public getError(error?: ValidationErrors|null, name?: string): string{
    if(!error) return '';
    const type = this.firstError.transform(error) as keyof typeof errors;
    return errors?.[type]?.(name);
  }
}
