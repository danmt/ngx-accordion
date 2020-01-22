import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { AccordionHeaderComponent } from './shared/components/accordion-header/accordion-header.component';

const KEY_UP = 38;
const KEY_DOWN = 40;

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
  private panelQuantity: number;

  ngAfterViewInit() {
    this.panelQuantity = this.accordionHeaders.length;
  }

  private goToPrevious() {
    if (this.currentlyFocused === 0) {
      this.currentlyFocused = this.panelQuantity - 1;
    } else {
      this.currentlyFocused = this.currentlyFocused - 1;
    }
  }

  private goToNext() {
    this.currentlyFocused = (this.currentlyFocused + 1) % this.panelQuantity;
  }

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

  handleKeyUp(event: KeyboardEvent) {
    if (!this.focus) {
      return;
    }

    if (event.keyCode === KEY_UP) {
      this.goToPrevious();
    } else if (event.keyCode === KEY_DOWN) {
      this.goToNext();
    }
  }
}
