import {Component, computed, model, OnInit, signal, WritableSignal} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {FormsModule} from "@angular/forms";
import {NewYearButtonComponent} from "../new-year-button/new-year-button.component";
import {JsonPipe} from "@angular/common";
import {Question, questions} from "./questions";


@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [
    FormsModule,
    NewYearButtonComponent,
    JsonPipe
  ],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent implements OnInit {


  id: WritableSignal<number | null> = signal(null);
  answer = model('');

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll("id"))
    )
      .subscribe(data => this.id.set(+data));


  }

  checkAnswer() {
    if (!!this.rigthAnswer() && !!this.nextPar()) {

      this.goNext();
    }

  }

  rigthAnswer(): Question | undefined {
    return questions.find(question => question.currentPar === this.id() && this.answer().toLowerCase() === question.answer?.toLowerCase())
  }

  nextPar = computed(() => {
    return this.currentComponent()?.nextPar;
  })

  currentComponent = computed(() => {
    return questions.find(question => this.id() === question.currentPar)
  })


  goNext(): void {
    const url = this.route.snapshot.url;
    this.router.navigate([url[0] + '/', this.nextPar()])
  }


  protected readonly questions = questions;
}
