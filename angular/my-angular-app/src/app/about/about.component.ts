import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  standalone: true,
  template: `
    <h1>Welcome to the About Page</h1>
    <p>This contains information about this application...</p>
  `,
})
export class AboutComponent {

}
