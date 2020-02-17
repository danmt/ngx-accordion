import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  handleKeyUp(event: KeyboardEvent) {
    //
  }
}
