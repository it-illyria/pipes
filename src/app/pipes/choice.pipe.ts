import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'choice'})

export class ChoicePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
