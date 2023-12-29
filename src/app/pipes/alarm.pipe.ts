import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'alarm'})

export class AlarmPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
