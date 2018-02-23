import {
    Component, ContentChild, Input,
    ViewEncapsulation
} from '@angular/core';
import {CBPUserMenuComponent} from '../../user/user-menu/user-menu.component';
import {CBPFeedbackLinkComponent} from '../../feedback/feedback-link.component';
import {CBPApplicationsMenuComponent} from '../../applications/apps-menu/apps-menu.component';

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

    @ContentChild(CBPApplicationsMenuComponent) cbpAppsMenu: CBPApplicationsMenuComponent;
    @ContentChild(CBPFeedbackLinkComponent) cbpFeedbackLink: CBPFeedbackLinkComponent;
    @ContentChild(CBPUserMenuComponent) cbpUserMenu: CBPUserMenuComponent;

    constructor() {
    };

}
