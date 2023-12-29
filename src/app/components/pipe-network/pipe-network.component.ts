import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-pipe-network',
  templateUrl: './pipe-network.component.html',
  styleUrl: './pipe-network.component.css'
})
export class PipeNetworkComponent {
  @Output() choiceMade = new EventEmitter<{ choice: string }>();

  // Example function where the hero makes a choice
  onHeroChoice(path: string): void {
    this.choiceMade.emit({ choice: path });
  }
}
