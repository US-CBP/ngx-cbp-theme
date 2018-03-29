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
        two: true,
        disabled: 'Y',
        something: '',
        something2: '',
        yn: 'Y'
    };

    changed($event: any) {
        console.log('demo toggle changed - ', $event);
    }
    constructor() {
        delete this.toggle.something;
        delete this.toggle.something2;
    }
}
