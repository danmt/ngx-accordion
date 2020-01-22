import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocusable]'
})
export class FocusableDirective {
  @Input('appFocusable') set appFocusable(focus: boolean) {
    if (focus) {
      this.el.nativeElement.focus();
    } else {
      this.el.nativeElement.blur();
    }
  }

  constructor(private el: ElementRef) {}
}
