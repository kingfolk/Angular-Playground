import { Component, OnInit, DoCheck } from '@angular/core';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


@Component({
  selector: 'app-performance-event',
  templateUrl: './performance-event.component.html',
  styleUrls: ['./performance-event.component.sass']
})
export class PerformanceEventComponent implements OnInit, DoCheck {

  currentId = null;
  boxes = [];
  offsetX;
  offsetY;

  ngOnInit() {
    for (let i = 0; i < 10000; i++) {
      const id = i;
      const x = getRandomInt(0, 800);
      const y = getRandomInt(0, 800);
      const box = {
        id,
        x,
        y
      };
      this.boxes.push(box);
    }
  }

  ngDoCheck() {
    console.log('PerformanceSvgComponent ngDoCheck');
  }
}
