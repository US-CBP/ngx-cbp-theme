import {Component} from '@angular/core';

@Component({
    selector: 'cbp-demo-button, demo-buttons',
    moduleId: module.id,
    templateUrl: './demo-buttons.component.html',
    styleUrls: ['./demo-buttons.component.scss']
})
export class DemoButtonsComponent {

    toggle = {
        one: true,
        two: false,
        disabled: 'Y',
        something: ''
    };

    constructor() {
        delete this.toggle.something;
    }
}
