import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory',
  pure: true
})
export class FilterCategoryPipe implements PipeTransform {

  transform(items: any[], filter: { category: string }): any {
    console.log(filter.category);
    if (!items || !filter || !filter.category) {
        return null;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    let filtered = items.filter(item => item.category.indexOf(filter.category) !== -1);
    console.log('filtered:', filtered);
    return filtered;
  }

}
