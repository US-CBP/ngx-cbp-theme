import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPHeaderComponent } from './cbp-header.component';
import { CBPHeaderModule }    from './cbp-header.module';
import {CBPUser, CBP_USER_SERVICE, CBPUserService} from '../../user/user';
import {Observable} from 'rxjs/Observable';
import {
    CBP_APPLICATIONS_SERVICE, CBPApplication, CBPApplicationsData,
    CBPApplicationsService
} from '../../applications/cbp-applications-service';
import {Subject} from 'rxjs/Subject';
import {ReplaySubject} from 'rxjs/ReplaySubject';

describe('CBPHeaderComponent', () => {
  let component: CBPHeaderComponent;
  let fixture: ComponentFixture<CBPHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CBPHeaderModule],
      providers: [
          {provide: CBP_USER_SERVICE, useClass: TestUserService},
          {provide: CBP_APPLICATIONS_SERVICE, useClass: TestApplicationsService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

export class TestUserService implements CBPUserService {

    private userSubject: ReplaySubject<CBPUser> = new ReplaySubject(1);

    constructor() {}

    login(): Subject<CBPUser> {
        this.userSubject.next(new CBPUser());
        return this.userSubject;
    }

    getUser(): Subject<CBPUser> {
        return this.userSubject;
    }

    logout() {}
}
export class TestApplicationsService implements  CBPApplicationsService {
    removeRecentApplication(recentApplication: CBPApplication): Observable<boolean> {
        return null;
    }

    getApplicationsData(): Observable<CBPApplicationsData> {
        let data = new CBPApplicationsData();

        data.recents = [
            new CBPApplication('App One', null),
            new CBPApplication('Second App ', null)];
        data.favorites = [
            new CBPApplication('Some App', null),
            new CBPApplication('Another CBPApplication', null),
            new CBPApplication('Yet Another CBPApplication', null)];
        data.currentApp = new CBPApplication('Kitchen Sink v4.0.1.0', null);
        return Observable.of(data);
    }

    refresh(): Observable<boolean> {
        return null;
    }

    search(token: string): Observable<CBPApplication[]> {
        return null;
    }

    removeFavoriteApplication(favoriteApplication: CBPApplication): Observable<boolean> {
        return null;
    }
}
