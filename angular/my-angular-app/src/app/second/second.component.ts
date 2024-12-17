import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
  template: '<p>Second Component: {{ dataService.sharedData}}</p>',
})
export class SecondComponent {
  constructor(public dataService: DataService) {
  }
}