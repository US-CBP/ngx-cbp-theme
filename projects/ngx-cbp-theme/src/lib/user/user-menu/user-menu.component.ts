import {Component, Inject, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {CBP_USER_SERVICE, CBPUser, CBPUserService} from '../user';
import {Subscription} from 'rxjs';
import {MatMenuTrigger} from '@angular/material';
import {CBPToolbarState, CBP_HEADER_STATE} from '../../header/cbp-toolbar/cbp-toolbar-state';


@Component({
    selector: 'cbp-user-menu, [cbp-user-menu], .cbp-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CBPUserMenuComponent implements OnInit, OnDestroy {

    userMenuExpanded = false;
    user: CBPUser;
    isLoggedIn = false;
    userDataLoaded = false;
    error: any;

    private subscriptions = new Subscription();

    @ViewChild(MatMenuTrigger) userMenuTrigger: MatMenuTrigger;

    get toolbarIsExpanded(): boolean {
        return this.toolbarState.toolbarIsExpanded.getValue();
    }

    constructor(@Inject(CBP_USER_SERVICE) private userService: CBPUserService,
                @Inject(CBP_HEADER_STATE) public toolbarState: CBPToolbarState) {}


    get loginProgress(): boolean {
        return this.userService.loginInProgress;
    }

    set loginProgress(progress: boolean) {
        this.userService.loginInProgress = progress;
    }

    ngOnInit() {
        this.subscriptions.add( this.toolbarState.hasToolbarMenu.subscribe(() => {
            if (this.userMenuTrigger && this.userMenuTrigger.menu) {
                this.userMenuExpanded = false;
                this.userMenuTrigger.closeMenu();
            }
        }));

        this.subscriptions.add( this.userService.getUser().subscribe({
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
        }));

      this.subscriptions.add(this.toolbarState.scrollState.subscribe((value) => {
        if (value === 'up') {
          this.userMenuTrigger.closeMenu();
        }
      }));

    }

    login($event: any) {
        this.loginProgress = true;
        this.isLoggedIn = false;
        this.userService.login();
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
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
        if (this.toolbarState.toolbarIsExpanded.getValue()) {
            this.userMenuExpanded = !this.userMenuExpanded;
            $event.stopPropagation();
        } else {
            if (this.userMenuTrigger) {
                this.userMenuTrigger.toggleMenu();
            }
        }
    }


}
