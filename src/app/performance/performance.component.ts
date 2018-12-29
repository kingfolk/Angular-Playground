import { Component, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.sass']
})
export class PerformanceComponent implements OnInit, AfterContentChecked {
  routes = [
    {
      route: 'normal',
      name: 'Svg containing 10000 rect box'
    },
    {
      route: 'onpush',
      name: 'User onpush strategy',
    },
    {
      route: 'ngzone',
      name: 'Run out of zone',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    console.log('PerformanceComponent ngAfterContentChecked');
  }

}
