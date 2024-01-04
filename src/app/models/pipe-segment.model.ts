export interface PipeSegment {
  path: string;
  malfunctioning: boolean;
  length: number;
  material: string;
}


export interface Choice {
  text: string;
  value?: string;
  correct?: boolean; // For QuizPipe usage
  path?: string; // For navigation
  action?: () => void; // For custom actions
}
