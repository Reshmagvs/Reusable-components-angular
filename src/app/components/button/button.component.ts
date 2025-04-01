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
