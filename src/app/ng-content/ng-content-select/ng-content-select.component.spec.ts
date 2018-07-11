import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentSelectComponent } from './ng-content-select.component';

describe('NgContentSelectComponent', () => {
  let component: NgContentSelectComponent;
  let fixture: ComponentFixture<NgContentSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
