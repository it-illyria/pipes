import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'choice'})

export class ChoicePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'catwalk':
        return 'the enchanted Catwalks of Whisperfall';
      case 'pipes':
        return 'the forbidden Pipes of Whisperfall';
      default:
        return '';
    }
  }

}
