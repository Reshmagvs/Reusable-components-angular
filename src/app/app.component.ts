import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { ButtonComponent } from './components/button/button.component'; // ✅ Import the ButtonComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass, ButtonComponent], // ✅ Import the ButtonComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  darkMode: boolean = false;

  toggleTheme() {
    this.darkMode = !this.darkMode;
  }

  showAlert() {
    alert('Clicked!');
  }
}
