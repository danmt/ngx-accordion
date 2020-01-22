import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input
} from '@angular/core';

import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accordion-header',
  templateUrl: './accordion-header.component.html',
  styleUrls: ['./accordion-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionHeaderComponent {
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  @Input() index: number;
  @Input() isFocused: boolean;
  @Input() isOpen: boolean;
  @Output() focused = new EventEmitter();
  @Output() blurred = new EventEmitter();
  @Output() opened = new EventEmitter();
  @Output() closed = new EventEmitter();

  setFocus() {
    this.focused.emit();
  }

  setBlur() {
    this.blurred.emit();
  }

  togglePanel() {
    console.log(this.isOpen);
    if (!this.isOpen) {
      this.opened.emit();
    } else {
      this.closed.emit();
    }
  }
}
