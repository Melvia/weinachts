import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MenuComponent} from "./menu/menu.component";
import {MenuEnigmaComponent} from "./menu-enigma/menu-enigma.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, FontAwesomeModule, RouterLink, MenuComponent, MenuEnigmaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weinachts';


}
