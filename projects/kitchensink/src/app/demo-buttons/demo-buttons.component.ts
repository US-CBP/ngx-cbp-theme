import {Component} from '@angular/core';

@Component({
    selector: 'cbp-demo-button, demo-buttons',
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
        yn: 'Y',
        three: <any>undefined
    };

    changed($event: any) {
        console.log('demo toggle changed - ', $event);
    }
    constructor() {
        delete this.toggle.something;
        delete this.toggle.something2;
    }
}
