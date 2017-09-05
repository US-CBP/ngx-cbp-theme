import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPUserMenuComponent } from './user-menu.component';
import {MdIconModule, MdMenuModule} from '@angular/material';
import {CBPProgressModule} from '../../progress/progress.module';
import {CBP_USER_SERVICE} from '../user';
import {MockUserService} from '../../../demo/app/mock-services/user.mock.service';

describe('CBPUserMenuComponent', () => {
  let component: CBPUserMenuComponent;
  let fixture: ComponentFixture<CBPUserMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBPUserMenuComponent ],
      imports: [MdIconModule, MdMenuModule, CBPProgressModule],
      providers: [{provide: CBP_USER_SERVICE, useClass: MockUserService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
