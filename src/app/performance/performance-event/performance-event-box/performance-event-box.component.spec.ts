import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceEventBoxComponent } from './performance-event-box.component';

describe('PerformanceEventBoxComponent', () => {
  let component: PerformanceEventBoxComponent;
  let fixture: ComponentFixture<PerformanceEventBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceEventBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceEventBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
