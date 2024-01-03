import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ChoicePipe} from "../../pipes";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}


  onJourney() {
    this.router.navigate([`hero`])
  }

}
