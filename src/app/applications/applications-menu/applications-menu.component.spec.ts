import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPApplicationsMenuComponent } from './applications-menu.component';
import {MdIconModule, MdMenuModule} from '@angular/material';
import {CBPProgressModule} from '../../progress/progress.module';
import {CBPPipesModule} from '../../pipes/pipes.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
    CBP_APPLICATIONS_SERVICE, CBPApplication, CBPApplicationsData,
    CBPApplicationsService
} from '../cbp-applications-service';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';

describe('CBPApplicationsMenuComponent', () => {
  let component: CBPApplicationsMenuComponent;
  let fixture: ComponentFixture<CBPApplicationsMenuComponent>;

  beforeEach(async(() => {
    // const  spiedAppService = jasmine.createSpy('mockAppService' , MockAppService);
    TestBed.configureTestingModule({
      imports: [MdMenuModule, MdIconModule, CBPProgressModule, CBPPipesModule, FlexLayoutModule],
      declarations: [ CBPApplicationsMenuComponent ],
      providers: [{provide: CBP_APPLICATIONS_SERVICE, useClass: MockAppService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPApplicationsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

class MockAppService extends CBPApplicationsService {
    private subject: ReplaySubject<CBPApplicationsData> =  new ReplaySubject(1);

    getApplicationsData(): Observable<CBPApplicationsData> {
        return this.subject;
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

    removeRecentApplication(recentApplication: CBPApplication): Observable<boolean> {
        return null;
    }

}