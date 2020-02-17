import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input
} from '@angular/core';

import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accordion-header',
  templateUrl: './accordion-header.component.html',
  styleUrls: ['./accordion-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionHeaderComponent {
  faAngleUp = faAngleUp;
  @Input() headerTitle: string;
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
    if (!this.isOpen) {
      this.opened.emit();
    } else {
      this.closed.emit();
    }
  }
}
