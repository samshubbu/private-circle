import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, text: string) {
    if (!value) return null;
    if (!text) return value;

    text = text.toLowerCase();

    return value.filter((item: any) =>
      JSON.stringify(item.list_names).toLowerCase().includes(text)
    );
  }
}
