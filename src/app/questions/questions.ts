import {SmokeTextComponent} from "../smoke-text/smoke-text.component";
import {Component} from "@angular/core";

interface Question<T> {
  currentPar: number;
  question?: string;
  answer: string;
  nextPar?: number;
  template?: T;
}
const questions: Question<any>[] = [
  {
    currentPar: 7675676,
    nextPar: 345675,
    question: 'Что зашифровано?',
    answer: 'Костер',
    template:  SmokeTextComponent,
  },
  {
    currentPar: 7675676,
    nextPar: 345675,
    question: 'Код декабрьского региона',
    answer: 'Марий Эл',
  },

  {
    currentPar: 7675676,
    nextPar: 345675,
    question: 'Что зашифровано?',
    answer: 'Костер',
    template:  SmokeTextComponent,
  },
