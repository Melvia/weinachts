import {Component, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-bubbles',
  standalone: true,
  imports: [],
  templateUrl: './bubbles.component.html',
  styleUrl: './bubbles.component.scss'
})
export class BubblesComponent {

  //constructor(private elem: ElementRef, private renderer: Renderer2) {}

  // ngAfterViewChecked() {
  //   const newContent = 'new content';
  //   const element = this.elem.nativeElement.querySelector('.parent a span');
  //   this.renderer.setProperty(element, 'innerHTML', newContent);
  // }
}
