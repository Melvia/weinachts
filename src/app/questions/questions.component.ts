import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription, switchMap} from "rxjs";


interface Question {
  currentPar: number;
  question: string;
  answer: string;
  nextPar?: number;
}

const questions: Question[] = [
  {
    currentPar: 7675676,
    nextPar: 345675,
    question: 'Что зашифровано?',
    answer: 'Костер',
  },
  {
    currentPar: 7675676,
    nextPar: 345675,
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
export class QuestionsComponent implements OnInit {

  id!: number;
  answer: string  = '';

  constructor(private route: ActivatedRoute, private router: Router){}
  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll("id"))
    )
      .subscribe(data=> this.id = +data);
  }

  checkAnswer() {
    if (!!this.rigthAnswer() && !!this.nextPar()) {
       this.goNext();
    }

  }

  rigthAnswer(): Question | undefined  {
    return questions.find(question => question.currentPar === this.id && this.answer.toLowerCase() === question.answer?.toLowerCase())
  }

  nextPar() {
    return questions.find(question => this.id === question.currentPar)?.nextPar;
  }


  goNext(): void {
    this.router.navigate([this.route.url, this.nextPar()])
  }


}
