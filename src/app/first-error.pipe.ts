import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'firstError'
})


export class FirstErrorPipe implements PipeTransform {
  transform(obj: ValidationErrors|null): string {
    if(!obj) return '';
    var keys = Object.keys(obj);
    if(keys && keys.length === 0) return '';
    return keys[0]
  }
}
