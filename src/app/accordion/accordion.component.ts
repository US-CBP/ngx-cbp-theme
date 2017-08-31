import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cbp-accordion',
  moduleId: module.id,
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class CBPAccordionComponent implements OnInit {

  private nextChildId = 0;
  constructor() { }

  ngOnInit() {
  }

  getNextChildId() {
    return (++this.nextChildId);
  }
}

