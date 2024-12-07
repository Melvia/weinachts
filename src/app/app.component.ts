import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {faCoffee, faHome, faMessage, faPhotoFilm, faSnowflake, faSnowman} from '@fortawesome/free-solid-svg-icons' ;
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {IconProp} from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, FontAwesomeModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements  OnInit {
  title = 'weinachts';

  @ViewChildren('link', {read: ElementRef}) protected links: QueryList<ElementRef> | undefined;
  protected readonly faSnowman = faSnowman as IconProp;
  protected readonly faHome = faHome as IconProp;
  protected readonly faMessage = faMessage as IconProp;
  protected readonly faPhotoFilm = faPhotoFilm as IconProp;
  protected readonly faSnowflake = faSnowflake as IconProp;

  ngOnInit(): void {

  }

  toggleActive(e: Event) {
    console.log(e.target )

    this.links?.forEach(item => item.nativeElement.classList.remove('active'));
    (e.currentTarget as HTMLElement).classList.add('active');

  }


}
