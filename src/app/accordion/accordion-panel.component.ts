import {ViewEncapsulation, Component, Input, OnInit, Host} from '@angular/core';
import {CBPAccordionComponent} from './accordion.component';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';


export const EXPANSION_PANEL_ANIMATION_TIMING = '250ms cubic-bezier(0.4,0.0,0.2,1)';



@Component({
  selector: 'cbp-accordion-panel',
  moduleId: module.id,
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.scss'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed', style({height: '0px', visibility: 'hidden', opacity: '0', 'padding-top': '0', 'padding-bottom': '0'})),
      state('expanded', style({height: '*', visibility: 'visible'})),
      transition('expanded <=> collapsed', animate(EXPANSION_PANEL_ANIMATION_TIMING)),
    ]),
    trigger('indicatorAnimation', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(90deg)'})),
      transition('expanded <=> collapsed', animate(EXPANSION_PANEL_ANIMATION_TIMING)),
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class CBPAccordionPanelComponent implements OnInit {

  @Input() panelTitle: String;
  @Input() isExpanded: Boolean = true;
  id = 0;

  constructor(@Host() parentAccordion: CBPAccordionComponent) {
    this.id = parentAccordion.getNextChildId();
  }

  ngOnInit() {
  }

  toggleHeading() {
    this.isExpanded = ! this.isExpanded;
  }

  getExpandedState() {
    return this.isExpanded ? 'expanded' : 'collapsed';
  }

}
