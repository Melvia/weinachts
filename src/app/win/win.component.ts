import {AfterViewInit, Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-win',
  standalone: true,
  imports: [],
  templateUrl: './win.component.html',
  styleUrl: './win.component.scss'
})
export class WinComponent implements OnInit, AfterViewInit{
  createSpark() {
    const spark = document.createElement('div');
    spark.classList.add('spark');
    let randomX = Math.random() * window.innerWidth;
    let randomY = Math.random() * window.innerHeight;
    spark.style.left = randomX + 'px';
    spark.style.top = randomY + 'px';
    document.body.appendChild(spark);

    setTimeout(function () {
      spark.remove()
    }, 2000);
  }
  ngOnInit(): void {
    console.log('nfnfnf');

  }

  ngAfterViewInit(): void {
    setInterval(this.createSpark, 200);
  }

}
