import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPToolbarComponent } from './cbp-toolbar.component';
import { CBPToolbarModule } from './cbp-toolbar.module';
import { CBPToolbarState } from './cbp-toolbar-state';

describe('CBPToolbarComponent', () => {
  let component: CBPToolbarComponent;
  let fixture: ComponentFixture<CBPToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CBPToolbarModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPToolbarComponent);
    component = fixture.componentInstance;
    component.toolbarState = new CBPToolbarState();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
