import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlarmPipe, ChoicePipe, CHOICES, LocationPipe, PathPipe, PROGRESS} from "../../pipes";
import {PipeSegment} from "../../models/pipe-segment.model";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-pipe-network',
  templateUrl: './pipe-network.component.html',
  styleUrls: ['./pipe-network.component.css'],
  providers: [ChoicePipe, LocationPipe, PathPipe, AlarmPipe, NgIf,
    {provide: CHOICES, useValue: ['catwalk', 'pipes', 'Option C']},
    {provide: PROGRESS, useValue: 0},
  ],

})
export class PipeNetworkComponent implements OnInit {
  chosenPath = '';
  currentSegment!: PipeSegment;
  formattedChoices = this.getFormattedChoices();
  formattedLocation = this.getFormattedLocation();


  // Inject pipes
  constructor(private route: ActivatedRoute, private pathPipe: PathPipe, private alarmPipe: AlarmPipe, private choicePipe: ChoicePipe, private locationPipe: LocationPipe) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.chosenPath = params['path'];
      this.loadScenario();
    });
    this.loadSegmentData();
  }

  loadSegmentData() {
    // ... logic to fetch data and assign to currentSegment ...
  }

  loadScenario() {
    if (this.chosenPath === 'pipes') {
      const pipeSegments = [
        {
          path: this.pathPipe.transform(7),
          malfunctioning: Math.random() > 0.75,
          length: 10,
          material: 'steel',
        },
      ];
      this.currentSegment = pipeSegments[0];
    }
  }

  displayPath() {
    return this.pathPipe.transform(Number(this.currentSegment.path));
  }

  triggerAlarm() {
    if (this.currentSegment) {
      if (this.alarmPipe.transform(this.currentSegment.malfunctioning)) {
      }
    } else {
    }
  }


  getChoice() {
    return this.choicePipe.transform();
  }

  getFormattedChoices() {
    return this.choicePipe.transform(this.getChoice());
  }

  getFormattedLocation() {
    return this.locationPipe.transform();
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
