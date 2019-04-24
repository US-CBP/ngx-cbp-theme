import {of as observableOf, Observable, BehaviorSubject, ReplaySubject, of} from 'rxjs';

import {delay, map, switchMap, tap} from 'rxjs/operators';
import {Inject, Injectable} from '@angular/core';
import {CBP_USER_SERVICE, CBPUser, CBPUserService} from '../user/user';
import {CBPApplication, CBPApplicationsData, CBPApplicationsService} from '../applications/cbp-applications-service';


@Injectable()
export class MockApplicationsService extends CBPApplicationsService {


  private subject: ReplaySubject<CBPApplicationsData> = new ReplaySubject<CBPApplicationsData>(1);
  private loaded = false;
  private data: CBPApplicationsData;

  constructor(@Inject(CBP_USER_SERVICE) private userService: CBPUserService) {
    super();
    this.data = new CBPApplicationsData();
  }

  getApplicationsData(): Observable<CBPApplicationsData> {
    return this._load(false);
  }

  refresh(): Observable<boolean> {
    return this._load(true).pipe(map(() => true));
  }

  search(token: string): CBPApplication[] {
    token = token.toLowerCase();
    const appData: CBPApplicationsData = this.data;
    if (appData && appData.list) {
      return appData.list.filter((app) => {
        return (app.name.toLowerCase().indexOf(token)) >= 0;
      });
    }
    return [];
  }

  removeRecentApplication(recentApplication: CBPApplication): Observable<boolean> {
    return this._removeAppFromArray(recentApplication, this.data.recents);
  }


  private _removeAppFromArray(app: CBPApplication, fromArray: CBPApplication[]): Observable<boolean> {
    const index = fromArray.indexOf(app);
    if (index >= 0) {
      fromArray.splice(index, 1);
    }
    return null;
  }

  private _getMockHttpData(): Observable<CBPApplicationsData> {
    const rawList: any[] = [];
    let count = 100;
    do {
      rawList.push(
        {
          id: `${count}`,
          name: `App ${count}`, description: `Description ${count}`, href: `http://example.com/app-${count}`
        });
    } while (count-- >= 0);

    const data = new CBPApplicationsData();
    data.list = <CBPApplication[]>rawList;
    return observableOf(data).pipe(delay(2000));
  }

  private _load(force = false): Observable<CBPApplicationsData> {
    if (force || !this.loaded) {
      this.loaded = true;
      return this._getMockHttpData().pipe(
        map(results => {
          results.lastRetrieved = new Date();
          results.currentApp = { name: 'Kitchen Sink' } as  CBPApplication;
          this.data = results;
          this.currentApp.next(results.currentApp);
          return results;
        }),
        switchMap((results) => {
          return this.userService.getUser()
            .pipe(map( user => {
              return this._applyUserToApplications(user, results);
            }));
        })
      );
    }
    return of(this.data);
  }


  /**
   * Fakeology - it does not even use user object
   * @param CBPUser user
   * @param CBPApplicationsData data
   * @returns CBPApplicationsData
   */
  private _applyUserToApplications(user: CBPUser, data: CBPApplicationsData): CBPApplicationsData {

    const applications = <CBPApplication[]>data.list;
    if (applications) {
      let random;
      data.recents = [];
      data.favorites = [];
      if (user && user.preferences) {
        data.favorites = this._getFavoritesFromUserPreferences(applications, user.preferences.favoriteAppIds);
      }
      // randomly assign few a favorites and some as recent
      random = this._randomIndex(0, applications.length / 10);
      data.recents.push(applications[random]);
      random = this._randomIndex(applications.length / 10, 2 * applications.length / 10);
      data.recents.push(applications[random]);

    }
    return data;
  }

  private _randomIndex(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  private _getFavoritesFromUserPreferences(applications: CBPApplication[], userFavoriteAppIds: String[]): CBPApplication[] {
    if (!userFavoriteAppIds || !applications) {
      return [];
    }
    const favorites = applications.filter((application) => {
      return userFavoriteAppIds.indexOf(application.id) >= 0;
    });
    return favorites;
  }
}

