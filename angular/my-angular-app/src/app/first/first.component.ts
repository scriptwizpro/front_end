import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
  template: '<p>First Component: {{dataService.sharedData}}}</p>',
})
export class FirstComponent {
  constructor(public dataService: DataService) {
  }
}