// Exercise 1: Two-Way Data Binding
// Create a simple Angular component to implement two-way data binding.

// app.component.ts

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AppComponent {
  userInput: string = '';
}