import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPUserMenuComponent } from './user-menu.component';
import { MatIconModule, MatMenuModule } from '@angular/material';
import { CBPProgressModule } from '../../progress/progress.module';
import { CBP_USER_SERVICE } from '../user';
import { MockUserService } from '../../mock-services/user.mock.service';
import { CBP_HEADER_STATE, CBPToolbarState } from '../../header/cbp-toolbar/cbp-toolbar-state';

describe('CBPUserMenuComponent', () => {
  let component: CBPUserMenuComponent;
  let fixture: ComponentFixture<CBPUserMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CBPUserMenuComponent],
      imports: [MatIconModule, MatMenuModule, CBPProgressModule],
      providers: [
        {provide: CBP_USER_SERVICE, useClass: MockUserService},
        {provide: CBP_HEADER_STATE, useClass: CBPToolbarState}
      ]
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
