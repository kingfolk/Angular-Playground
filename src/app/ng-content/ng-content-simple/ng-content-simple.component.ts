import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content-simple',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ng-content-simple.component.sass']
})
export class NgContentSimpleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
