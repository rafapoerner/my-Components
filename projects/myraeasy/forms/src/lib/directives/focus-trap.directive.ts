import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[focusTrap]'
})
export class FocusTrapDirective implements AfterViewInit {

  constructor(private elem: ElementRef) { }

  private firstfocusableElement!: HTMLElement;
  private lastfocusableElement!: HTMLElement;

  ngAfterViewInit(): void {
    const focusableElements = this.elem
      .nativeElement
      .querySelectorAll(`
        [tabindex]:not([tabindex="-1"]),
        a[href]:not([disabled]),
        button:not([disabled]),
        textarea:not([disabled]),
        input:not([disabled]),
        select:not([disabled])`
      ) as Array<HTMLElement>;

    this.firstfocusableElement = focusableElements[0];
    this.lastfocusableElement = focusableElements[focusableElements.length - 1];
    this.elem.nativeElement.focus();
  }

  @HostListener("keydown", ['$event'])
  private managerTab(event: KeyboardEvent): void {

    if (event.key !== "Tab") {
      return
    }

    if (event.shiftKey && document.activeElement === this.firstfocusableElement) {
      this.lastfocusableElement.focus();
      event.preventDefault();

    } else if (document.activeElement === this.lastfocusableElement) {
      this.firstfocusableElement.focus();
      event.preventDefault()
    }
  }
}
