import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceZoneComponent } from './performance-zone.component';

describe('PerformanceZoneComponent', () => {
  let component: PerformanceZoneComponent;
  let fixture: ComponentFixture<PerformanceZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
