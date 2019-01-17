import { of as observableOf,
  Observable,
  BehaviorSubject
} from 'rxjs';

import {
  map
} from 'rxjs/operators';
import {
  Inject,
  Injectable
} from '@angular/core';
import {
  CBP_USER_SERVICE,
  CBPUser,
  CBPUserService
} from '../user/user';
import {
  CBPApplication,
  CBPApplicationsData,
  CBPApplicationsService
} from '../applications/cbp-applications-service';

@Injectable()
export class MockApplicationsService extends CBPApplicationsService {
  private subject: BehaviorSubject < CBPApplicationsData > = new BehaviorSubject < CBPApplicationsData > (null);
  private loaded = false;

  constructor(@Inject(CBP_USER_SERVICE) private userService: CBPUserService) {
    super();
  }

  getApplicationsData(): Observable < CBPApplicationsData > {
    this._load();
    return this.subject;
  }

  refresh(): Observable < boolean > {
    this.loaded = false;
    this._load();
    return null;
  }
  search(token: string): CBPApplication[] {
    token = token.toLowerCase();
    const appData: CBPApplicationsData = this.subject.getValue();
    if (appData && appData.list) {
      return appData.list.filter((app) => {
        return (app.name.toLowerCase().indexOf(token)) >= 0;
      });
    }
    return [];
  }

  removeRecentApplication(recentApplication: CBPApplication): Observable < boolean > {
    const data: CBPApplicationsData = this.subject.getValue();
    return this._removeAppFromArray(recentApplication, data.recents);
  }

  private _removeAppFromArray(app: CBPApplication, fromArray: CBPApplication[]): Observable < boolean > {
    const index = fromArray.indexOf(app);
    if (index >= 0) {
      fromArray.splice(index, 1);
    }
    return null;
  }
  
  /**
   * _load() - initates the get request to retrive the list of CBP apps used
   * as well as the user data
   */
  private _load() {
    if (!this.loaded) {
      this.loaded = true;
      // simulates fetching some data
      setTimeout(() => {
        this._getData().subscribe({
          next: data => {
            // next() few items then we send other items
            this.subject.next(data);
            // we enhance data from user later
            this.userService.getUser().subscribe({
              next: (user: CBPUser) => {
                this.subject.next(this._applyUserToApplications(user, data));
              }
            });
          }
        });
      }, 2000);
    }
  }
  private _getData(): Observable < CBPApplicationsData > {
    return this._getMockHttpData().pipe(
      map((data: CBPApplicationsData) => {
        data.lastRetrieved = new Date();
        data.currentApp = new CBPApplication('Manifest Trade Portal');
        this.currentApp.next(data.currentApp);
        return data;
      }));
  }

  private _getMockHttpData(): Observable < CBPApplicationsData > {
    const rawList: any[] = [];
    let count = 100;
    do {
      rawList.push({
        id: `${count}`,
        name: `App ${count}`,
        description: `Description ${count}`,
        href: `http://example.com/app-${count}`
      });
    } while (count-- >= 0);

    const data = new CBPApplicationsData();
    data.list = < CBPApplication[] > rawList;
    return observableOf(data);

  }

  /**
   * Fakeology - it does not even use user object
   * @param CBPUser user
   * @param CBPApplicationsData data
   * @returns CBPApplicationsData
   */
  private _applyUserToApplications(user: CBPUser, data: CBPApplicationsData): CBPApplicationsData {

    const applications = < CBPApplication[] > data.list;
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
