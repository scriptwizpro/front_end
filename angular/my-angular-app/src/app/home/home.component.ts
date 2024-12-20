import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  template: `
    <h1>Welcome to the Home Page</h1>
    <p>This is the home page content...</p>
  `,
})
export class HomeComponent {

}