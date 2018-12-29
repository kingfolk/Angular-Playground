import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceSvgBoxComponent } from './performance-svg-box.component';

describe('PerformanceSvgBoxComponent', () => {
  let component: PerformanceSvgBoxComponent;
  let fixture: ComponentFixture<PerformanceSvgBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceSvgBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceSvgBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
