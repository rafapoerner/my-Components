import { Pipe, PipeTransform } from '@angular/core';
import { ItemMultiSelectModel, ListMultiSelectModel } from '../multi-select/models/multi-select.model';


@Pipe({
  name: 'filter'
})
export class SearchMultiSelectPipe implements PipeTransform {
  transform(items: ListMultiSelectModel[] | null, searchText: string): ListMultiSelectModel[] | null {
    if (!items) {
      return null;
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter(item => {
      const titleMatch = item.title?.toLocaleLowerCase().includes(searchText);
      const labelMatch = item.dropdownList?.some((item: ItemMultiSelectModel) =>
        item.label?.toLocaleLowerCase().includes(searchText)
        );

      return titleMatch || labelMatch;
    });
  }
}
