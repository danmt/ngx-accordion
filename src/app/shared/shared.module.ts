import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionHeaderComponent } from './components/accordion-header/accordion-header.component';
import { AccordionContentComponent } from './components/accordion-content/accordion-content.component';
import { FocusableDirective } from './directives/focusable/focusable.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AccordionHeaderComponent,
    AccordionContentComponent,
    FocusableDirective
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    AccordionHeaderComponent,
    AccordionContentComponent,
    FocusableDirective
  ]
})
export class SharedModule {}
