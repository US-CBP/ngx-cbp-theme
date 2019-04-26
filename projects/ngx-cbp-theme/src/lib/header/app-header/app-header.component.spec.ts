import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CBPAppHeaderModule } from './app-header.module';
import { CBPAppHeaderComponent } from './app-header.component';

describe('CBPAppHeaderComponent', () => {
  let component: CBPAppHeaderComponent;
  let fixture: ComponentFixture<CBPAppHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, CBPAppHeaderModule]
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
