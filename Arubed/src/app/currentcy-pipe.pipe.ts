import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currentcyPipe'
})
export class CurrentcyPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
