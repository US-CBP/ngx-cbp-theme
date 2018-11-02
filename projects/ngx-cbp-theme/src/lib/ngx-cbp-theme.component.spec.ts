import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCbpThemeComponent } from './ngx-cbp-theme.component';

describe('NgxCbpThemeComponent', () => {
  let component: NgxCbpThemeComponent;
  let fixture: ComponentFixture<NgxCbpThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCbpThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCbpThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
