import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'difficulty'})

export class DifficultyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
