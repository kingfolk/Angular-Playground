import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentSimpleComponent } from './ng-content-simple.component';

describe('NgContentSimpleComponent', () => {
  let component: NgContentSimpleComponent;
  let fixture: ComponentFixture<NgContentSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
