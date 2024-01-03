import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'quiz'})
export class QuizPipe implements PipeTransform {

  transform(catwalkProgress: number): string {
    if (catwalkProgress === 0) {
      return 'Welcome to the Catwalk Quiz! Answer the following questions to proceed.';
    } else if (catwalkProgress === 1) {
      return 'Question 1: What is the capital of the Whispering Mountains?';
    } else if (catwalkProgress === 2) {
      return 'Question 2: How many peaks are there in the Whispering Mountains?';
    } else if (catwalkProgress === 3) {
      return 'Congratulations! You have successfully completed the Catwalk Quiz.';
    } else {
      return 'Invalid quiz progress.';
    }
  }

}
