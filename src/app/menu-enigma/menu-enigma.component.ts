import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-menu-enigma',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './menu-enigma.component.html',
  styleUrl: './menu-enigma.component.scss'
})
export class MenuEnigmaComponent implements OnInit {
  ngOnInit(): void {

    (document.querySelectorAll('ul li a') as NodeListOf< Element & {dataset: {text: string}}>).forEach((element ): void => {
      const randomChars = "!@#$%^&*()_+-<>?";
      const originalText = element.dataset.text;

      element.addEventListener('mouseover', () => {
        let iterations = 0;
        const interval = setInterval(() => {
          element.textContent = originalText.split("")
            .map((char, index) => {
              if (index < iterations) return char;

              return randomChars.charAt(Math.floor(Math.random() * randomChars.length));
            }).join("");
          if (iterations > originalText.length) {
            clearInterval(interval);
          }
          iterations += 1/3;
        }, 50)
      })
    })
  }



}
