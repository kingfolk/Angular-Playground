import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: '[app-performance-svg-box]',
  templateUrl: './performance-svg-box.component.html',
  styleUrls: ['./performance-svg-box.component.sass']
})
export class PerformanceSvgBoxComponent implements OnInit, DoCheck {
  @Input() box;
  @Input() selected;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.box.id % 100 === 0) {
      console.log('box ngDoCheck');
    }
  }

}
