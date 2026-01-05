import { Directive, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If the section is visible (even partially)
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'revealed');
          // We stop observing once revealed so it stays visible
          this.observer?.unobserve(this.el.nativeElement);
        }
      });
    }, { 
      threshold: 0.1, // Trigger when 10% is visible
      rootMargin: '0px 0px -10% 0px' // Offset to trigger slightly before/during scroll
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}