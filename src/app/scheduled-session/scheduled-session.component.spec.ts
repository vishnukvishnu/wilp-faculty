import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledSessionComponent } from './scheduled-session.component';

describe('ScheduledSessionComponent', () => {
  let component: ScheduledSessionComponent;
  let fixture: ComponentFixture<ScheduledSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduledSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
