import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DatePipe',
})
export class DatePipe implements PipeTransform {
  transform(value: Date) {
    return this.formataDataParaExibicao(value);
  }

  formataDataParaExibicao(data: Date) : string {
    return data.toDateString();
  }
}