import { Pipe, PipeTransform } from '@angular/core';

export const DATE_FORMAT_DayOfWeek_ShortDate_Time = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
};
@Pipe({
  name: 'datetime'
})

export class CBPDatetimePipe implements PipeTransform {

  transform(value: any): any {
    return new Intl.DateTimeFormat('en-US', DATE_FORMAT_DayOfWeek_ShortDate_Time).format(value);
  }

}
