import { Component, OnInit, Host } from '@angular/core';
import { NgContentInjectComponent } from '../ng-content-inject.component';

@Component({
  selector: 'app-ng-content-inject-child',
  template: '<div>child {{id}}</div>',
  styleUrls: ['./ng-content-inject-child.component.sass']
})
export class NgContentInjectChildComponent implements OnInit {
  id: number;

  constructor(@Host() private parent: NgContentInjectComponent) { }

  ngOnInit() {
    this.parent.register();
    this.id = this.parent.childCount;
  }

}
