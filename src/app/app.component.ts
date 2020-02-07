import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { AccordionHeaderComponent } from './shared/components/accordion-header/accordion-header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChildren(AccordionHeaderComponent) accordionHeaders: QueryList<
    ElementRef
  >;
  focus = false;
  currentlyFocused = -1;
  currentlyOpen = -1;

  setFocus(pos: number) {
    this.focus = true;
    this.currentlyFocused = pos;
  }

  setBlur() {
    this.focus = false;
    this.currentlyFocused = -1;
  }

  openPanel(pos: number) {
    this.currentlyOpen = pos;
  }

  closePanel() {
    this.currentlyOpen = -1;
  }
}
