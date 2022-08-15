import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../../types/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input() AddProduct: Function = () => {}
  Product: Product = { name: '', image: '' };
  ImageTouched: boolean = false;
  validImage: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openFileChooser(){
    const input = document.querySelector('input.fileChooser[type="file"]') as HTMLInputElement;
    if(input) return input.click();

    const fileInput: HTMLInputElement  = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.hidden = true;
    fileInput.classList.add('fileChooser');
    fileInput.onchange = (e:any) => this.onChangeInputFile(e)
    document.body.appendChild(fileInput);
    fileInput.click();
  }

  FTB64(File: File, ...args: unknown[]): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(File);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }

  async onChangeInputFile(event:any): Promise<void>{
    const file = event.target.files?.[0]

    if(!file){
      this.ImageTouched = true;
      this.validImage = false;
      this.Product.image = '';
      return;
    }

    this.validImage = true;
    this.Product.image = await this.FTB64(file)
  }

  onSubmit(form: NgForm): void {
    if(form.invalid) return;
    this.AddProduct(this.Product);
    this.resetForm(form.resetForm);
  }

  resetForm(reset?: Function): void {
    this.ImageTouched = false;
    this.Product = {
      name: '',
      price: undefined,
      image: '',
    };
console.log({reset});

    if(reset) reset();
  }

}
