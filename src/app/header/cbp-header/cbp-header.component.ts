import {
    Component, Input,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'cbp-header',
    moduleId: module.id,
    templateUrl: './cbp-header.component.html',
    styleUrls: ['./cbp-header.component.scss'],
    encapsulation: ViewEncapsulation.None

})
export class CBPHeaderComponent {

    @Input() cbpAppsMenuExclude: boolean;
    @Input() cbpFeedbackLinkExclude: boolean;
    @Input() cbpUserMenuExclude: boolean;

    constructor() {};

}
