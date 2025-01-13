import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterLink} from "@angular/router";
import {faHome, faMessage, faPhotoFilm, faSnowflake, faSnowman} from '@fortawesome/free-solid-svg-icons';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterLink
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  title = 'weinachts';

  @ViewChildren('link', {read: ElementRef}) protected links: QueryList<ElementRef> | undefined;
  protected readonly faSnowman = faSnowman as IconProp;
  protected readonly faHome = faHome as IconProp;
  protected readonly faMessage = faMessage as IconProp;
  protected readonly faPhotoFilm = faPhotoFilm as IconProp;
  protected readonly faSnowflake = faSnowflake as IconProp;


  toggleActive(e: Event) {
    console.log(e.target)

    this.links?.forEach(item => item.nativeElement.classList.remove('active'));
    (e.currentTarget as HTMLElement).classList.add('active');

  }

}
