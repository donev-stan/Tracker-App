import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[svgIconDirective]',
})
export class SvgIconDirective {
  @Input() name: string | undefined;
  @Input() width: string = '30';
  @Input() height: string = 'auto';
  @Input() color: string = 'black';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const svgFilePath = this.getFilePath(this.name);

    fetch(svgFilePath)
      .then((response) => response.text())
      .then((svgData) => {
        const parser = new DOMParser();
        const svgElement = parser.parseFromString(
          svgData,
          'image/svg+xml'
        ).documentElement;

        svgElement.setAttribute('width', this.width);
        svgElement.setAttribute('height', this.height);

        this.renderer.setStyle(svgElement, 'fill', this.color);
        this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
        this.renderer.appendChild(this.el.nativeElement, svgElement);
      });
  }

  getFilePath(name: string | undefined): string {
    return name ? `assets/svg/${name}.svg` : `assets/svg/not-found.svg`;
  }
}
