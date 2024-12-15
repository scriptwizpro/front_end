import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  template: '<p>Message from Parent: {{ message }}</p>',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() message: string = '';
}