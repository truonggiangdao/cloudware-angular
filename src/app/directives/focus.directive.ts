import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[inputFocus]'
})
export class FocusDirective {
  constructor(el: ElementRef) {
    el.nativeElement.focus();
  }
}
