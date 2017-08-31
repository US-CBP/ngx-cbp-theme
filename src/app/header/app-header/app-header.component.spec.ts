import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPAppHeaderComponent } from './app-header.component';
import { MaterialModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CBPAppHeaderComponent', () => {
  let component: CBPAppHeaderComponent;
  let fixture: ComponentFixture<CBPAppHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBPAppHeaderComponent ],
      imports: [MaterialModule, NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPAppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
