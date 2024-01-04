import {Pipe, PipeTransform, Injectable, Inject} from '@angular/core';
import { InjectionToken } from '@angular/core';

export const PROGRESS = new InjectionToken<number>('progress');

@Pipe({ name: 'location' })
@Injectable()
export class LocationPipe implements PipeTransform {
  constructor(@Inject(PROGRESS) private progress: number) {}

  transform(): string {
    return `Progress: ${this.progress}`;
  }
}
