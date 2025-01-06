import { Pipe, PipeTransform } from '@angular/core';

interface Indexable<T = any> {
  [key: string]: T
}

@Pipe({
  name: 'selectBy',
  standalone: false
})
export class SelectByPipe implements PipeTransform {

  transform<T extends Indexable>(items: T[], itemProp: keyof T, value: any, count: number): T[] {
    console.log('Filter array PIPE')
    return items.filter(item => item[itemProp] === value).reverse().slice(0, count)
  }

}
