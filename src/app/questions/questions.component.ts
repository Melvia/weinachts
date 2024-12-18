import {Component} from '@angular/core';


interface Question {
  currentPar: string;
  question: string;
  answer: string;
  nextPar?: string;
}

const questions: Question[] = [
  {
    currentPar: '7675676',
    nextPar: '345675',
    question: 'Что зашифровано?',
    answer: 'Костер',
  },
  {
    currentPar: '7675676',
    nextPar: '345675',
    question: 'Код декабрьского региона',
    answer: 'Марий Эл',
  },


]

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {

  checkAnswer() {
   if (this.checkAnswer() === undefined) {

   }

  }


}
