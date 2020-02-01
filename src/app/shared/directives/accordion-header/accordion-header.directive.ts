import {
  Directive,
  Input,
  EmbeddedViewRef,
  ViewContainerRef,
  TemplateRef
} from '@angular/core';

@Directive({
  selector: '[appAccordionHeader]'
})
export class AccordionHeaderDirective<T = unknown> {
  private context: any = {};
  private viewRef: EmbeddedViewRef<any> | null = null;

  @Input() set appAccordionHeader(val: any) {
    this.context.isOpen = val.isOpen;
    this.updateView();
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  private updateView() {
    this.viewContainer.clear();
    if (this.templateRef) {
      this.viewRef = this.viewContainer.createEmbeddedView(
        this.templateRef,
        this.context
      );
    }
  }
}
