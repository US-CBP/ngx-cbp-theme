import { Injectable } from '@angular/core';
import {
  ReplaySubject,
  Subject
} from 'rxjs';
import {
  CBPUser,
  CBPUserService
} from '../user/user';

@Injectable()
export class MockUserService extends CBPUserService {

  private subject: ReplaySubject <CBPUser> = new ReplaySubject <CBPUser> ();
  private loggedIn = false;

  constructor() {
    super();
  }

  getUser(): Subject <CBPUser> {
    return this.subject;
  }
  login(delay = 3000): Subject <CBPUser> {
    setTimeout(() => {
      this.loggedIn = true;
      const user = new CBPUser();
      user.firstName = 'John';
      user.lastName = 'Doe';
      user.preferences = {
        favoriteAppIds: this._randomlyGetFavoritAppId()
      };
      this.subject.next(user);
      // this.subject.complete();
    }, delay);
    return this.subject;
  }


  logout(): void {
    this.loggedIn = false;
    this.subject.next(null);
    console.log('mock logout');
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
  private _randomlyGetFavoritAppId(): String[] {
    const favoriteIds: String[] = [];
    let count = 2;
    do {
      favoriteIds.push('' + Math.floor(Math.random() * 10));
    } while (count-- >= 0);
    return favoriteIds;
  }
}
