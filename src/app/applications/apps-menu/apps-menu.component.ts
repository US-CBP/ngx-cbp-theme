import {Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {MatMenuTrigger} from '@angular/material';
import {
    CBP_APPLICATIONS_SERVICE, CBPApplication, CBPApplicationsData,
    CBPApplicationsService
} from '../cbp-applications-service';
import {CBPToolbarState, CBPToolbarStateChange} from '../../header/cbp-toolbar/cbp-toolbar-state.service';

@Component({
    selector: 'cbp-apps-menu',
    templateUrl: './apps-menu.component.html',
    styleUrls: ['./apps-menu.component.scss'],
    entryComponents: []
})
export class CBPApplicationsMenuComponent implements OnInit, OnDestroy {


    toolbarState: CBPToolbarState = new CBPToolbarState();

    menuDataLoaded = false;
    applicationsDataLoading = true;
    isApplicationsExpanded = false;
    applicationsData?: CBPApplicationsData;
    private applicationsServiceSubscription: Subscription;
    private toolbarStateChangeSubscription: Subscription;


    @ViewChild(MatMenuTrigger) cbpMenuTrigger: MatMenuTrigger;

    public error: any;

    constructor(@Inject(CBP_APPLICATIONS_SERVICE) public applicationsService: CBPApplicationsService,
                private toolbarStateChange: CBPToolbarStateChange) {
    }

    ngOnInit() {
        this.toolbarStateChangeSubscription = this.toolbarStateChange.subscribe((state: CBPToolbarState) => {
            if (state) {
                this.toolbarState = state;
                if (this.cbpMenuTrigger && this.cbpMenuTrigger.menu) {
                    this.isApplicationsExpanded = false;
                    this.cbpMenuTrigger.closeMenu();
                }
            }
        });

        if (this.applicationsService) {
            this.applicationsServiceSubscription = this.applicationsService.getApplicationsData().subscribe(
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
                }
            );
        }
    }


    removeFromRecent(app: CBPApplication, $event: any) {
        this.applicationsService.removeRecentApplication(app);
        $event.stopPropagation();
    }

    ngOnDestroy() {
        if (this.applicationsServiceSubscription) {
            this.applicationsServiceSubscription.unsubscribe();
        }
        if (this.toolbarStateChangeSubscription) {
            this.toolbarStateChangeSubscription.unsubscribe();
        }

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
       if (this.toolbarState.toolbarIsExpanded) {
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
