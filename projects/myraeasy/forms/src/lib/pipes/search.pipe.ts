import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): Observable<any> | any {

    const textFilter = args[0];
    const key = args[1];

    if (textFilter == undefined)
      return value;

    else {

      if (value instanceof Observable) {

        return (value as Observable<any>).pipe(
          map(value => value.filter((p: any) => p[`${key}`].toLowerCase().includes(textFilter.toLowerCase())))
        )

      } else {
        return value.filter(p => p[`${key}`].toLowerCase().includes(textFilter.toLowerCase()))
      }
    }
  }
}
