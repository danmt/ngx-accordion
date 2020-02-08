import {
  Component,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { AccordionHeaderComponent } from './shared/components/accordion-header/accordion-header.component';

const ARROW_DOWN = 'ArrowDown';
const ARROW_UP = 'ArrowUp';
const HOME = 'Home';
const END = 'End';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
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

  private goToNext() {
    this.currentlyFocused = (this.currentlyFocused + 1) % this.panelQuantity;
  }

  private goToPrevious() {
    if (this.currentlyFocused === 0) {
      this.currentlyFocused = this.panelQuantity - 1;
    } else {
      this.currentlyFocused = this.currentlyFocused - 1;
    }
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
    switch (event.key) {
      case ARROW_DOWN:
        this.goToNext();
        break;
      case ARROW_UP:
        this.goToPrevious();
        break;
      case HOME:
        this.currentlyFocused = 0;
        return;
      case END:
        this.currentlyFocused = this.panelQuantity - 1;
        return;
      default:
        break;
    }
  }
}
