import {Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {MatMenuTrigger} from '@angular/material';
import {
    CBP_APPLICATIONS_SERVICE, CBPApplication, CBPApplicationsData,
    CBPApplicationsService
} from '../cbp-applications-service';
import {CBPToolbarState, CBP_HEADER_STATE} from '../../header/cbp-toolbar/cbp-toolbar-state';

@Component({
    selector: 'cbp-apps-menu',
    templateUrl: './apps-menu.component.html',
    styleUrls: ['./apps-menu.component.scss'],
    entryComponents: []
})
export class CBPApplicationsMenuComponent implements OnInit, OnDestroy {


    menuDataLoaded = false;
    applicationsDataLoading = true;
    isApplicationsExpanded = false;
    applicationsData?: CBPApplicationsData;
    private subscriptions: Subscription[] = [];


    @ViewChild(MatMenuTrigger) cbpMenuTrigger: MatMenuTrigger;

    public error: any;

    constructor(@Inject(CBP_APPLICATIONS_SERVICE) public applicationsService: CBPApplicationsService,
                @Inject(CBP_HEADER_STATE) private toolbarState: CBPToolbarState) {
    }

    get toolbarIsExpanded(): boolean {
        return this.toolbarState.toolbarIsExpanded.getValue();
    }
    ngOnInit() {
        this.subscriptions.push(this.toolbarState.hasToolbarMenu.
            subscribe(() => {
                if (this.cbpMenuTrigger && this.cbpMenuTrigger.menu) {
                    this.isApplicationsExpanded = false;
                    this.cbpMenuTrigger.closeMenu();
                }
        }));

        if (this.applicationsService) {
            this.subscriptions.push(this.applicationsService.getApplicationsData()
                .subscribe(
                   (data: CBPApplicationsData) => {
                        this.applicationsData = data;
                        if (data) {
                            this.menuDataLoaded = true;
                            this.applicationsDataLoading = false;
                        }
                    },
                   (err) => {
                        this.error = err;
                        this.applicationsDataLoading = false;
                    }));
        }
    }


    removeFromRecent(app: CBPApplication, $event: any) {
        this.applicationsService.removeRecentApplication(app);
        $event.stopPropagation();
    }

    ngOnDestroy() {
        this.subscriptions.forEach( (subscription) => subscription.unsubscribe());
    }

    reloadApplicationsData($event: Event): void {
        this.applicationsService.refresh();
        this.applicationsDataLoading = true;
        $event.stopPropagation();
    }

    getApplicationsDirectoryUrl(): string {
        return this.applicationsService.getApplicationsDirectoryUrl();
    }

    toggleApplicationsMenu($event: Event) {
       if (this.toolbarState.toolbarIsExpanded.getValue()) {
            this.isApplicationsExpanded = !this.isApplicationsExpanded;
            $event.stopPropagation();
       } else {
           if (this.cbpMenuTrigger) {
               this.cbpMenuTrigger.toggleMenu();
           }
       }
    }


    // TODO find a way to share this
    stopPropogation($event: Event) {
        $event.stopPropagation();
    }
}
