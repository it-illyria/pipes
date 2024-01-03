import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChoicePipe } from "../../pipes";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [ChoicePipe]
})
export class HeroComponent {

  currentChoice: string = '';

  constructor(private router: Router, private choicePipe: ChoicePipe) {}

  onPathChoice(choice: string) {
    this.currentChoice = choice;
  }

  continueWithChoice() {
    const link = this.getLinkForCurrentChoice();
    if (link) {
      this.router.navigate([link]);
    }
  }

  getLinkForCurrentChoice(): string {
    switch (this.currentChoice) {
      case 'catwalk':
      case 'pipes':
        return `/pipe-network/${this.currentChoice}`;
      default:
        return '/';
    }
  }

  formatPathDescription(path: string): string {
    return this.choicePipe.transform(path);
  }
}
