import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'difficulty'})

export class DifficultyPipe implements PipeTransform {

  transform(data: any, difficulty: 'easy' | 'normal' = 'easy'): any {
    switch (difficulty) {
      case 'easy':
        break;
      case 'normal':
        break;
    }
    return data;
  }

}
