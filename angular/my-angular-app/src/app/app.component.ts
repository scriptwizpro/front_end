// Exercise 1: Two-Way Data Binding
// Create a simple Angular component to implement two-way data binding.

// app.component.ts

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from "@angular/core";
import { ParentComponent } from "./parent/parent.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: true,
  imports: [CommonModule, FormsModule, ParentComponent]
})
// export class AppComponent {
//   userInput: string = '';
// }


// Exercise 2: Display a List
// Create an Angular component to display a list of items.
// export class AppComponent {
//   items: string[] = ['Apple', 'Banana', 'Cherry'];
// }


// Exercise 3: Conditional Rendering
// Use *ngIf to conditionally display content based on a variable.
// export class AppComponent {
//   isLoggedIn: boolean = false;
// }

// Exercise 4: Event Binding
// Implement a button click event to update a counter.
export class AppComponent {
  counter: number = 0;

  increment() {
    this.counter++;
  }
}