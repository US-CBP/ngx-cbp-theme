import {Component, Inject, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {MdMenu} from '@angular/material';
import {
    CBP_APPLICATIONS_SERVICE, CBPApplication, CBPApplicationsData,
    CBPApplicationsService
} from '../cbp-applications-service';

@Component({
    selector: 'cbp-applications-menu',
    templateUrl: './applications-menu.component.html',
    styleUrls: ['./applications-menu.component.scss']
})
export class CBPApplicationsMenuComponent implements OnInit, OnDestroy {


    private _isToolbarExpanded: boolean;
    menuDataLoaded = false;
    applicationsDataLoading = true;
    isApplicationsExpanded = false;
    isXS = false;
    applicationsData?: CBPApplicationsData;
    private applicationsServiceSubscription: Subscription;
    private mediaSubscription: Subscription;

    @ViewChild(MdMenu)
    private cbpMenu: MdMenu;

    public error: any;

    constructor(@Inject(CBP_APPLICATIONS_SERVICE) public applicationsService: CBPApplicationsService, private media: ObservableMedia    ) {
    }

    ngOnInit() {
        if (this.media) {
            this.mediaSubscription = this.media.subscribe(
                (change: MediaChange) => {
                    if (change) {
                        if (change.mqAlias !== 'xs') {
                            this._isToolbarExpanded = false;
                            this.isApplicationsExpanded = false;
                            setTimeout(() => {
                                this.isXS = false;
                            });
                        } else {
                            // TODO this.cbpMenu._emitCloseEvent();
                            setTimeout(() => {
                                this.isXS = true;
                            });
                        }
                    }
                }
            );
        }

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

    removeFromFavorite(app: CBPApplication, $event: any) {
        this.applicationsService.removeFavoriteApplication(app);
        $event.stopPropagation();
    }

    removeFromRecent(app: CBPApplication, $event: any) {
        this.applicationsService.removeRecentApplication(app);
        $event.stopPropagation();
    }

    ngOnDestroy() {
        console.log('ngDestroy Called');
        if (this.applicationsServiceSubscription) {
            this.applicationsServiceSubscription.unsubscribe();
        }
        if (this.mediaSubscription) {
            this.mediaSubscription.unsubscribe();
        }

    }

    reloadApplicationsData($event: Event): void {
        this.applicationsService.refresh();
        this.applicationsDataLoading = true;
        $event.stopPropagation();
    }

    toggleApplicationsMenu($event: Event) {
        if (this.menuDataLoaded && this._isToolbarExpanded) {
            this.isApplicationsExpanded = ! this.isApplicationsExpanded;
            $event.stopPropagation();
        }
    }
    @Input()
    set toolbarExpanded(expanded: boolean) {
        this._isToolbarExpanded = expanded;
    }

    get toolbarExpanded(): boolean { return this._isToolbarExpanded; }

}
