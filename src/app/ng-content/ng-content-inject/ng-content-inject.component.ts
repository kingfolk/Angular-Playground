import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content-inject',
  template: `
    <div>total child count: {{childCount}}</div>
    <ng-content></ng-content>
  `,
  styleUrls: ['./ng-content-inject.component.sass']
})
export class NgContentInjectComponent implements OnInit {

  name = 'parent';

  childCount = 0;

  constructor() { }

  ngOnInit() {
  }

  register() {
    this.childCount ++;
  }

}
