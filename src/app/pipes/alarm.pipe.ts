import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'alarm'})

export class AlarmPipe implements PipeTransform {

  transform(malfunctioning: boolean): string {
    return malfunctioning ? 'ALARM!' : '';
  }

}
