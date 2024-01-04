import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'path'})

export class PathPipe implements PipeTransform {

  transform(length: number = 5): string {
    const turns = [];
    for (let i = 0; i < length; i++) {
      turns.push(Math.random() > 0.5 ? 'L' : 'R');
    }
    return turns.join('');
  }

}
