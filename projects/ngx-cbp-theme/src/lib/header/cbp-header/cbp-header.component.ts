import {ChangeDetectionStrategy, Component, ContentChild, Inject, Input, ViewEncapsulation} from '@angular/core';
import {CBPUserMenuComponent} from '../../user/user-menu/user-menu.component';
import {CBPFeedbackLinkComponent} from '../../feedback/feedback-link.component';
import {CBPApplicationsMenuComponent} from '../../applications/apps-menu/apps-menu.component';
import {CBP_HEADER_STATE, CBPToolbarState} from '../cbp-toolbar/cbp-toolbar-state';
import {CBP_APPLICATIONS_SERVICE, CBPApplicationsService} from '../../applications/cbp-applications-service';


@Component({
  selector: 'cbp-header',
  templateUrl: './cbp-header.component.html',
  styleUrls: ['./cbp-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CBPHeaderComponent {

  public toolbarState: CBPToolbarState;
  @Input() cbpAppsMenuExclude: boolean;
  @Input() cbpFeedbackLinkExclude: boolean;
  @Input() cbpUserMenuExclude: boolean;

  @ContentChild(CBPApplicationsMenuComponent) cbpAppsMenu: CBPApplicationsMenuComponent;
  @ContentChild(CBPFeedbackLinkComponent) cbpFeedbackLink: CBPFeedbackLinkComponent;
  @ContentChild(CBPUserMenuComponent) cbpUserMenu: CBPUserMenuComponent;

  constructor(@Inject(CBP_HEADER_STATE) state: CBPToolbarState,
              @Inject(CBP_APPLICATIONS_SERVICE) public applicationsService?: CBPApplicationsService) {
    this.toolbarState = state;
  }

  isProvided(comp: any): boolean {
    return comp ? true : false;
  }

  navigateToAppsDir($event: any) {
    if (this.applicationsService) {
      const appsDirUrl = this.applicationsService.getApplicationsDirectoryUrl();
      if (appsDirUrl) {
        window.location.href = appsDirUrl;
      }
    }
  }
}
