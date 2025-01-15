import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, fromEvent, interval, map, scan, startWith, switchMap} from "rxjs";
import {Letters} from "./abcInterfases";


const levelChangeThreshold = 20;
const speedAjust = 50;
const endThreshold = 15;
const gameWidth = 30;
const randomLetter = () =>
  String.fromCharCode(
    Math.random() * ('z'.charCodeAt(0) - 'a'.charCodeAt(0)) + 'a'.charCodeAt(0)
  );

@Component({
  selector: 'app-alphabet-invasion',
  standalone: true,
  imports: [],
  templateUrl: './alphabet-invasion.component.html',
  styleUrl: './alphabet-invasion.component.scss'
})

export class AlphabetInvasionComponent implements OnInit {


  intervalSubject = new BehaviorSubject(600);

  letter$ = this.intervalSubject.pipe(
    switchMap(
      i => interval(i).pipe(
        scan<number, Letters>
        (letters => ({
            intrvl: i,
            ltrs: [(
              {
                letter: randomLetter(),
                yPos: Math.floor(Math.random() * gameWidth)
              }),
              ...letters.ltrs
            ]
          }),
          {ltrs: [], intrvl: 0})
      )));

  const keys = fromEvent(document, 'keyDown')
    .pipe(
      startWith({key: ''}),
      map((e: KeyboardEvent)=> e.key)
    )



}
