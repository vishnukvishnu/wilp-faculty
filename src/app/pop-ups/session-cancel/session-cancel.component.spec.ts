import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionCancelComponent } from './session-cancel.component';

describe('SessionCancelComponent', () => {
  let component: SessionCancelComponent;
  let fixture: ComponentFixture<SessionCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
