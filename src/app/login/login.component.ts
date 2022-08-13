import { Component, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { FirstErrorPipe } from '../pipes/first-error.pipe';
import { errors } from '../form-errors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  firstError: FirstErrorPipe = new FirstErrorPipe();
  name: string = '';
  email: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  public getError(error?: ValidationErrors|null, name?: string): string{
    if(!error) return '';
    const type = this.firstError.transform(error) as keyof typeof errors;
    return errors?.[type]?.(name);
  }

  onSubmit(valid?: boolean|null, reset?: Function): void {

    if(!valid) return

    console.log("creando usuario", this.name);

    this.resetForm(reset);
  }

  resetForm(reset?: Function): void {
    this.name = '';
    this.email = '';
    if(reset) reset(reset);
  }
}
