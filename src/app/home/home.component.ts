import { Component, OnInit } from '@angular/core';

const routers = [
  {
    route: '/ng-content',
    name: 'advanced usage of ng-content',
  },
  {
    route: '/performance',
    name: 'performance tips',
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  routers = routers;

  constructor() { }

  ngOnInit() {
  }

}
