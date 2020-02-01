import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionHeaderComponent } from './components/accordion-header/accordion-header.component';
import { AccordionContentComponent } from './components/accordion-content/accordion-content.component';
import { FocusableDirective } from './directives/focusable/focusable.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionHeaderDirective } from './directives/accordion-header/accordion-header.directive';
import { AccordionTriggerDirective } from './directives/accordion-trigger/accordion-trigger.directive';

@NgModule({
  declarations: [
    AccordionHeaderComponent,
    AccordionContentComponent,
    FocusableDirective,
    AccordionHeaderDirective,
    AccordionTriggerDirective
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    AccordionHeaderComponent,
    AccordionContentComponent,
    FocusableDirective,
    AccordionHeaderDirective,
    AccordionTriggerDirective
  ]
})
export class SharedModule {}
