import { Pipe, PipeTransform } from '@angular/core';
import { Career } from '../model/career';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(careers: Career[], filterText: string): any {
    return careers ? careers.filter((item: any) =>
    item.name.search(new RegExp(filterText, 'i')) > -1) : [];
  }

}
