import {Component, contentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-question-card',
  standalone: true,
  imports: [],
  templateUrl: './question-card.component.html',
  styleUrl: './question-card.component.scss'
})
export class QuestionCardComponent {
 textQuestion = contentChild.required<ElementRef>('p');

  onClick() {
    this.textQuestion().nativeElement.textContent = 'Не тыкай';
  }
}
