import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content-select',
  template: `
    <ng-content></ng-content>
    <ng-content select="span"></ng-content>
    <ng-content select="[attribute]"></ng-content>
    <ng-content select=".class"></ng-content>
  `,
  styleUrls: ['./ng-content-select.component.sass']
})
export class NgContentSelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
