import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentPipe'
})
export class ContentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return null;
    }
    return value.substr(0, 100) + '...';
  }
}
