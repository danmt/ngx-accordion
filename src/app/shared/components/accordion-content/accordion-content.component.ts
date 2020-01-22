import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: ['./accordion-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
