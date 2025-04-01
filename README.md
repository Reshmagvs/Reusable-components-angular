# Understanding Reusable components in Angular 

Output:

![Alt Text](https://github.com/Reshmagvs/Reusable-components-angular/blob/main/reuse_angular.png)

1. Setup a Angular Project in VS Code
````
ng new my-angular-app  
cd my-angular-app
ng g c components/button   
````
2. Under src - app you will find app.component.html file , update it with :
```
<div [ngClass]="darkMode ? 'dark-container' : 'light-container'">
  <h1>🚀 Reusable Component in Angular</h1>
  
  <app-button label="Click Me" (btnClick)="showAlert()"></app-button>
  
  <br />
  
  <button class="theme-button" (click)="toggleTheme()">
    {{ darkMode ? '☀️ Light Mode' : '🌙 Dark Mode' }}
  </button>
</div>
```
3. Update app.component.ts :
```
import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { ButtonComponent } from './components/button/button.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass, ButtonComponent], 
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
```
4. Update styles.css under src folder :
```
.light-container {
    text-align: center;
    padding: 50px;
    background: linear-gradient(135deg, #f8f9fa, #d6e4f0);
    transition: all 0.5s ease-in-out;
  }
  
  .dark-container {
    text-align: center;
    padding: 50px;
    background: linear-gradient(135deg, #1e1e1e, #333);
    color: white;
    transition: all 0.5s ease-in-out;
  }
  
  .styled-button {
    background: linear-gradient(90deg, #007BFF, #00C9FF);
    color: white;
    padding: 14px 24px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
  }
  
  .styled-button:hover {
    background: linear-gradient(90deg, #0056b3, #0093E9);
    transform: scale(1.08);
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.3);
  }
  
  .theme-button {
    margin-top: 20px;
    background: linear-gradient(90deg, #ffcc00, #ff8800);
    color: #333;
    padding: 12px 18px;
    font-size: 18px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    font-weight: bold;
  }
  
```
5. Update app.component.css
```
.light-container {
    text-align: center;
    padding: 50px;
    background: linear-gradient(135deg, #f8f9fa, #d6e4f0);
    transition: all 0.5s ease-in-out;
  }
  
  .dark-container {
    text-align: center;
    padding: 50px;
    background: linear-gradient(135deg, #1e1e1e, #333);
    color: white;
    transition: all 0.5s ease-in-out;
  }
  
  .theme-button {
    margin-top: 20px;
    background: linear-gradient(90deg, #ffcc00, #ff8800);
    color: #333;
    padding: 12px 18px;
    font-size: 18px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    font-weight: bold;
  }

```
6. Create components filder with button.component.ts
```
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button class="custom-button" (click)="btnClick.emit()">
      {{ label }}
    </button>
  `,
  styles: [`
    .custom-button {
      padding: 12px 20px;
      background: linear-gradient(90deg, #ff7eb3, #ff758c); /* Pink Gradient */
      color: white;
      font-size: 18px;
      border: none;
      cursor: pointer;
      border-radius: 8px;
      transition: 0.3s;
    }
    .custom-button:hover {
      background: linear-gradient(90deg, #ff758c, #ff7eb3); /* Reverse Gradient */
      transform: scale(1.05);
    }
  `]
})
export class ButtonComponent {
  @Input() label: string = 'Click Me';
  @Output() btnClick = new EventEmitter<void>();
}
```
7. Run in VS Code
```
ng serve
```
