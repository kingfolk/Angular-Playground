import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceOnpushBoxComponent } from './performance-onpush-box.component';

describe('PerformanceOnpushBoxComponent', () => {
  let component: PerformanceOnpushBoxComponent;
  let fixture: ComponentFixture<PerformanceOnpushBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceOnpushBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceOnpushBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
