import {
  Component,
  ContentChild,
  Inject,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { CBPUserMenuComponent } from '../../user/user-menu/user-menu.component';
import { CBPFeedbackLinkComponent } from '../../feedback/feedback-link.component';
import { CBPApplicationsMenuComponent } from '../../applications/apps-menu/apps-menu.component';
import {
  CBPToolbarState,
  CBP_HEADER_STATE
} from '../cbp-toolbar/cbp-toolbar-state';
import {
  CBP_APPLICATIONS_SERVICE,
  CBPApplicationsService
} from '../../applications/cbp-applications-service';


@Component({
  selector: 'cbp-header',
  templateUrl: './cbp-header.component.html',
  styleUrls: ['./cbp-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CBPHeaderComponent {

  public toolbarState: CBPToolbarState;
  @Input() cbpAppsMenuExclude: boolean;      // if true, do not show the apps menu with the dropdown
  @Input() cbpFeedbackLinkExclude: boolean;  // if true, do not show the feedback link
  @Input() cbpUserMenuExclude: boolean;      // if true, do not show the username header area on 
  @Input() cbpAppsMenuSimple: boolean;       // if true, only show the simple version of the apps-menu
  @Input() cbpAppsMenuName: string;          // the name of the CBP String passed in

  @ContentChild(CBPApplicationsMenuComponent) cbpAppsMenu: CBPApplicationsMenuComponent;
  @ContentChild(CBPFeedbackLinkComponent) cbpFeedbackLink: CBPFeedbackLinkComponent;
  @ContentChild(CBPUserMenuComponent) cbpUserMenu: CBPUserMenuComponent;

  constructor(@Inject(CBP_HEADER_STATE) state: CBPToolbarState,
              @Inject(CBP_APPLICATIONS_SERVICE) public applicationsService?: CBPApplicationsService) {
    this.toolbarState = state;
  }

  /**
   * Simple boolean to check if the menu sub-elements are there
   * @param comp - an object of the menu in question
   */
  isProvided(comp: any): boolean {
    return comp ? true : false;
  }

  /**
   * in the apps menu, when clicking "view all apps", it redirects to the main
   * application directory
   * @param $event - a click event on the apps menu
   */
  navigateToAppsDir($event: any) {
    if (this.applicationsService) {
      const appsDirUrl = this.applicationsService.getApplicationsDirectoryUrl();
      if (appsDirUrl) {
        window.location.href = appsDirUrl;
      }
    }
  }
}
