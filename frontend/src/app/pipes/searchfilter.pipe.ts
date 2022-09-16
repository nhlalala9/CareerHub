import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(careers: any[], filterText: string): any {
    return careers ? careers.filter((item: any) =>
    item.name.search(new RegExp(filterText, 'i')) > -1) : [];
  }

}
