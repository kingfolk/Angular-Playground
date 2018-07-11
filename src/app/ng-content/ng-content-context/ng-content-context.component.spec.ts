import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentContextComponent } from './ng-content-context.component';

describe('NgContentContextComponent', () => {
  let component: NgContentContextComponent;
  let fixture: ComponentFixture<NgContentContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
