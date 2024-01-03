import {PathPipe} from "./path.pipe";
import {AlarmPipe} from "./alarm.pipe";
import {ChoicePipe} from "./choice.pipe";
import {LocationPipe} from "./location.pipe";
import {DifficultyPipe} from "./difficulty.pipe";
import {QuizPipe} from "./quiz.pipe";

export const pipes: any[] = [
  PathPipe, AlarmPipe, ChoicePipe, LocationPipe, DifficultyPipe, QuizPipe
]

export * from './path.pipe'
export * from './alarm.pipe'
export * from './choice.pipe'
export * from './location.pipe'
export * from './difficulty.pipe'
