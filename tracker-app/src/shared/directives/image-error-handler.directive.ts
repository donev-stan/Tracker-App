import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'img',
})
export class ImageErrorHandlerDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('error') onError() {
    this.renderer.setProperty(
      this.el.nativeElement,
      'src',
      'assets/images/404.svg'
    );
  }
}
