import {Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {CBP_USER_SERVICE, CBPUser, CBPUserService} from '../user';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'cbp-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class CBPUserMenuComponent implements OnInit, OnDestroy {

  private _isToolbarExpanded = false;
  userMenuExpanded =  false;
  user?: CBPUser;
  loginProgress = false;
  isLoggedIn = false;
  userDataLoaded = false;
  error: any;
  private userServiceSubscription: Subscription;


  constructor(@Inject(CBP_USER_SERVICE) private userService: CBPUserService) { }

  ngOnInit() {}

  login() {
      this.loginProgress = true;
      this.isLoggedIn = false;
      if (this.userServiceSubscription) {
          this.userService.login();
      } else {
          this.userServiceSubscription = this.userService.login().subscribe({
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
                  console.log('errr' + err);
                  this.loginProgress = false;
                  this.isLoggedIn = false;
                  this.error = err;
                  this.userDataLoaded = false;
              },
              complete: () => {
                  console.log('completed');
              }
          });
      }

  }
  ngOnDestroy() {
      if (this.userServiceSubscription) {
          this.userServiceSubscription.unsubscribe();
      }
      this.user = undefined;
      this.userDataLoaded = false;
  }

  logout(): void {
      this.userService.logout();
      // this._isToolbarExpanded = false;
  }

  toggleMenu() {
      this.userMenuExpanded = ! this.userMenuExpanded;
  }

  @Input()
  set toolbarExpanded(expanded: boolean) {
      this._isToolbarExpanded = expanded;
  }

  get toolbarExpanded(): boolean { return this._isToolbarExpanded; }
}
