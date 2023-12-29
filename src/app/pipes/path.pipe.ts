import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'path'})

export class PathPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
