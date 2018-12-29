import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceSvgComponent } from './performance-svg.component';

describe('PerformanceSvgComponent', () => {
  let component: PerformanceSvgComponent;
  let fixture: ComponentFixture<PerformanceSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
