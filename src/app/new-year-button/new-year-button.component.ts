import {Component, ElementRef, HostListener, inject, Renderer2} from '@angular/core';

@Component({
  selector: 'app-new-year-button',
  standalone: true,
  imports: [],
  templateUrl: './new-year-button.component.html',
  styleUrl: './new-year-button.component.scss'
})


export class NewYearButtonComponent {
  @HostListener('mousemove') onMousemove() {
    this.renderer.addClass(this.elementRef.nativeElement, 'active')
  }

  @HostListener('mouseleave') onMouseleave() {
    this.renderer.removeClass(this.elementRef.nativeElement, 'active')
  }

  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);

}
