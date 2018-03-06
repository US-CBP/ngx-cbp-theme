import {Component, Inject, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {CBP_USER_SERVICE, CBPUser, CBPUserService} from '../user';
import {Subscription} from 'rxjs/Subscription';
import {MatMenuTrigger} from '@angular/material';
import {
    CBPToolbarState,
    CBPToolbarStateChange
} from '../../header/cbp-toolbar/cbp-toolbar-state.service';

@Component({
    selector: 'cbp-user-menu, [cbp-user-menu], .cbp-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CBPUserMenuComponent implements OnInit, OnDestroy {

    toolbarState: CBPToolbarState = new CBPToolbarState();
    userMenuExpanded = false;
    user: CBPUser;
    isLoggedIn = false;
    userDataLoaded = false;
    error: any;

    private userServiceSubscription: Subscription;
    private toolbarStateChangeSubscription: Subscription;

    @ViewChild(MatMenuTrigger) userMenuTrigger: MatMenuTrigger;

    constructor(@Inject(CBP_USER_SERVICE) private userService: CBPUserService,
                private toolbarStateChange: CBPToolbarStateChange) {
    }


    get loginProgress(): boolean {
        return this.userService.loginInProgress;
    }

    set loginProgress(progress: boolean) {
        this.userService.loginInProgress = progress;
    }

    ngOnInit() {
        this.toolbarStateChangeSubscription = this.toolbarStateChange.subscribe((state: CBPToolbarState) => {
            this.toolbarState = state;
            if (this.userMenuTrigger && this.userMenuTrigger.menu) {
                this.userMenuExpanded = false;
                this.userMenuTrigger.closeMenu();
            }
        });

        this.userServiceSubscription = this.userService.getUser().subscribe({
            next: (data: CBPUser) => {
                if (data) {
                    this.user = data;
                    this.userDataLoaded = true;
                    this.loginProgress = false;
                    this.isLoggedIn = true;
                } else {
                    this.loginProgress = false;
                    this.isLoggedIn = false;
                    this.user = data;
                    this.userDataLoaded = false;
                }
            },
            error: (err: any) => {
                this.loginProgress = false;
                this.isLoggedIn = false;
                this.error = err;
                this.userDataLoaded = false;
            }
        });

    }

    login() {
        this.loginProgress = true;
        this.isLoggedIn = false;
        this.userService.login();
    }

    ngOnDestroy() {
        if (this.userServiceSubscription) {
            this.userServiceSubscription.unsubscribe();
        }

        if (this.toolbarStateChangeSubscription) {
            this.toolbarStateChangeSubscription.unsubscribe();
        }
        this.user = undefined;
        this.userDataLoaded = false;
    }

    logout(): void {
        this.isLoggedIn = false;
        this.userService.logout();
        this.userMenuExpanded = false;
    }

    toggleMenu($event: Event) {
        if (!this.isLoggedIn || !this.userDataLoaded) {
            return;
        }
        if (this.toolbarState.toolbarIsExpanded) {
            this.userMenuExpanded = !this.userMenuExpanded;
            $event.stopPropagation();
        } else {
            if (this.userMenuTrigger) {
                this.userMenuTrigger.toggleMenu();
            }
        }
    }


}
