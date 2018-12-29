import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceEventComponent } from './performance-event.component';

describe('PerformanceEventComponent', () => {
  let component: PerformanceEventComponent;
  let fixture: ComponentFixture<PerformanceEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
