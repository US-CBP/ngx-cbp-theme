import {async, ComponentFixture, fakeAsync, inject, TestBed} from '@angular/core/testing';

import {CBPApplicationsMenuComponent} from './apps-menu.component';
import {MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule} from '@angular/material';
import {CBPProgressModule} from '../../progress/progress.module';
import {CBPPipesModule} from '../../pipes/pipes.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CBP_APPLICATIONS_SERVICE, CBPApplicationsData} from '../cbp-applications-service';
import {MockApplicationsService} from '../../../mock-services/applications.mock.service';
import {CBP_USER_SERVICE} from '../../user/user';
import {MockUserService} from '../../../mock-services/user.mock.service';
import {CBPApplicationsSearchComponent} from '../applications-search/applications-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CBPToolbarState, CBP_HEADER_STATE} from '../../header/cbp-toolbar/cbp-toolbar-state';
import { By }              from '@angular/platform-browser';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {CommonModule} from '@angular/common';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('CBPApplicationsMenuComponent', () => {
    let component: CBPApplicationsMenuComponent;
    let fixture: ComponentFixture<CBPApplicationsMenuComponent>;


    beforeEach(async(() => {
        // const  spiedAppService = jasmine.createSpy('mockAppService' , MockAppService);
        TestBed.configureTestingModule({
            imports: [
                CommonModule, MatMenuModule, MatIconModule, FlexLayoutModule, FormsModule, ReactiveFormsModule,
                MatInputModule, MatFormFieldModule, NoopAnimationsModule,
                MatDividerModule, CBPProgressModule, CBPPipesModule],
            declarations: [CBPApplicationsMenuComponent, CBPApplicationsSearchComponent],
            providers: [
                MockApplicationsService, MockUserService,
                {provide: CBP_APPLICATIONS_SERVICE, useExisting: MockApplicationsService},
                {provide: CBP_USER_SERVICE, useExisting: MockUserService},
                {provide: CBP_HEADER_STATE, useClass: CBPToolbarState}
            ]
        })
            .compileComponents();
    }));

    beforeEach(inject( [MockApplicationsService, MockUserService], (
        appServices: MockApplicationsService, userServices: MockUserService) => {
        this.appServices = appServices;
        this.userServices = userServices;
        this.appsDataSubject = new ReplaySubject();
        spyOn(this.appServices, 'getApplicationsData').and.returnValue(this.appsDataSubject);
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CBPApplicationsMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        this.toolbarStateChange = TestBed.get(CBP_HEADER_STATE);
      });



    it('should be created', () => {
        expect(component).toBeTruthy();
    });



    // TODO fix later
    xdescribe('toolbarIsExpanded state', () => {

        beforeEach(() => {
            this.toolbarState.hasToolbarMenu.next(false);
            this.toolbarState.toolbarIsExpanded.next(false);
            this.appsDataSubject.next(new CBPApplicationsData());
            // fixture.detectChanges();
            spyOn(component.cbpMenuTrigger, 'toggleMenu').and.callThrough();
            // done();
        });

        xit('toolbarIsExpanded state - when false menu is triggered & applications-expansion-panel is not present', (done: any) => {
            fixture.detectChanges();
            const menuClickTarget = fixture.debugElement.query(By.css('.cbp-current-application-name-container'));
            menuClickTarget.triggerEventHandler('click', {});
            fixture.detectChanges();
            expect(component.cbpMenuTrigger.toggleMenu).toHaveBeenCalled();
            expect(fixture.debugElement.query(By.css('.applications-expansion-panel'))).toBeFalsy();
            done();
        });

        xit('when true menu is not triggered and vanilla panel is enabled', fakeAsync(() => {
            this.toolbarState.toolbarIsExpanded.next(true);
            fixture.detectChanges();
            const menuClickTarget = fixture.debugElement.query(By.css('.cbp-current-application-name-container'));
            const fakeEvent = jasmine.createSpyObj('Event' , ['stopPropagation']);
            menuClickTarget.triggerEventHandler('click', fakeEvent);
            fixture.detectChanges();
            expect(fakeEvent.stopPropagation).toHaveBeenCalled();
            expect(component.cbpMenuTrigger.toggleMenu).not.toHaveBeenCalled();
            expect(fixture.debugElement.query(By.css('.applications-expansion-panel'))).toBeDefined();
        }));
        xit('when false menu is triggered & applications-expansion-panel is not present', (done: any) => {
            this.toolbarState.toolbarIsExpanded.next( false);
            fixture.detectChanges();
            const menuClickTarget = fixture.debugElement.query(By.css('.cbp-current-application-name-container'));
            menuClickTarget.triggerEventHandler('click', null);
            fixture.detectChanges();
            expect(component.cbpMenuTrigger.toggleMenu).toHaveBeenCalled();
            expect(fixture.debugElement.query(By.css('.applications-expansion-panel'))).toBeFalsy();
            done();
        });

    });

});

