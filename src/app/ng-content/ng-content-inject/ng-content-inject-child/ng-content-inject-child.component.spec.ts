import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentInjectChildComponent } from './ng-content-inject-child.component';

describe('NgContentInjectChildComponent', () => {
  let component: NgContentInjectChildComponent;
  let fixture: ComponentFixture<NgContentInjectChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentInjectChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentInjectChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
