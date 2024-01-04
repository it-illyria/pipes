import { Inject, Injectable, InjectionToken, Pipe, PipeTransform } from '@angular/core';
import {Choice} from "../models/pipe-segment.model";
import {QuizPipe} from "./quiz.pipe";


export const CHOICES = new InjectionToken<string[]>('choices');
@Pipe({ name: 'choice' })
@Injectable()
export class ChoicePipe implements PipeTransform {
  private readonly choices: Choice[];

  constructor(@Inject(CHOICES) choices: Choice[], private quizPipe: QuizPipe) {
    this.choices = choices;
  }
  transform(value?: string): string {
    if (value) {
      switch (value) {
        case 'catwalk':
          return 'the enchanted Catwalks of Whisperfall';
        case 'pipes':
          return 'the forbidden Pipes of Whisperfall';
        default:
          return '';
      }
    } else {
      const randomChoice = this.choices[Math.floor(Math.random() * this.choices.length)];

      if (randomChoice.correct !== undefined) {
        return this.quizPipe.transform(Number(randomChoice));
      } else {
        return randomChoice.text;
      }
    }
  }
}
