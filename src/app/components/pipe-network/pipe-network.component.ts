import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pipe-network',
  templateUrl: './pipe-network.component.html',
  styleUrls: ['./pipe-network.component.css'],
})
export class PipeNetworkComponent {
  chosenPath = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.chosenPath = params['path'];
      this.handleScenario();
    });
  }

  handleScenario() {
    switch (this.chosenPath) {
      case 'catwalk':
        break;
      case 'pipes':
        break;
      default:
        break;
    }
  }
}
