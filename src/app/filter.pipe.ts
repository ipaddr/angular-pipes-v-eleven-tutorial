import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if(value.length === 0 || filterString === undefined || filterString === ''){
      return value;
    }
    const arrayTemp = [];
    for(const item of value){
      if(item[propName] === filterString){
        arrayTemp.push(item);
      }
    }
    return arrayTemp;
  }

}
