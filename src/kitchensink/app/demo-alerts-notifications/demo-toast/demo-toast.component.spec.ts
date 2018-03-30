import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoToastComponent } from './demo-toast.component';

describe('DemoToastComponent', () => {
  let component: DemoToastComponent;
  let fixture: ComponentFixture<DemoToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
