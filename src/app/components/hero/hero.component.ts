import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  constructor(private router: Router) {}

  onPathChoice(event: any) {
    // Extract the chosen path from the event
    const choice: string = event.choice;

    // Your existing logic to navigate based on the choice
    if (choice === 'catwalk') {
      this.router.navigate(['/catwalk']);
    } else if (choice === 'pipes') {
      this.router.navigate(['/pipes']);
    }
  }


  // Simulating the behavior of the PathPipe
  formatPathDescription(path: string): string {
    switch (path) {
      case 'catwalk':
        return 'the enchanted Catwalks of Whisperfall';
      case 'pipes':
        return 'the forbidden Pipes of Whisperfall';
      default:
        return '';
    }
  }

}
