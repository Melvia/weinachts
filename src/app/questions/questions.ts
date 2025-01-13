import {SmokeTextComponent} from "../smoke-text/smoke-text.component";
import {Component} from "@angular/core";
import {WinComponent} from "../win/win.component";

export interface Question {
  currentPar: number;
  question?: string;
  answer: string;
  nextPar?: number;
  template?: Component;
}


export const questions: Question[] = [
  {
    currentPar: 7675676,
    nextPar: 345675,
    question: 'Что зашифровано?',
    answer: 'Костер',
  },
  {
    currentPar: 345675,
    nextPar: 12232423,
    question: 'Код декабрьского региона',
    answer: 'Марий Эл',
  },

  {
    answer: 'Костер',
    currentPar: 7675676,
    nextPar: 345675,
    question: 'Что зашифровано?',

  }
]
