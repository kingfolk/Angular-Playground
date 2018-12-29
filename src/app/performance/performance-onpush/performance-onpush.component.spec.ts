import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceOnpushComponent } from './performance-onpush.component';

describe('PerformanceOnpushComponent', () => {
  let component: PerformanceOnpushComponent;
  let fixture: ComponentFixture<PerformanceOnpushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceOnpushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
