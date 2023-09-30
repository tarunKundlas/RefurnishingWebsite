import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onScroll() {
    const header = this.el.nativeElement.querySelector('#header');
    const lol = this.el.nativeElement.querySelector('#lol');

    if (window.scrollY > 0) {
      this.renderer.addClass(header, 'active');
      lol.src = 'pic/bulb2.png';
    } else {
      this.renderer.removeClass(header, 'active');
      lol.src = 'pic/bulb.png';
    }
  }
}
