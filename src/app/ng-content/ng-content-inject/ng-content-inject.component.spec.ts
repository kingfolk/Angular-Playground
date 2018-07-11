import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentInjectComponent } from './ng-content-inject.component';

describe('NgContentInjectComponent', () => {
  let component: NgContentInjectComponent;
  let fixture: ComponentFixture<NgContentInjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentInjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentInjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
