import { Component, OnInit, DoCheck } from '@angular/core';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

@Component({
  selector: 'app-performance-svg',
  templateUrl: './performance-svg.component.html',
  styleUrls: ['./performance-svg.component.sass']
})
export class PerformanceSvgComponent implements OnInit, DoCheck {

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

  mouseDown(event) {
    const id = Number(event.target.getAttribute('dataId'));
    const box = this.boxes[id];
    this.offsetX = box.x - event.clientX;
    this.offsetY = box.y - event.clientY;
    this.currentId = id;
  }

  mouseMove(event) {
    event.preventDefault();
    if (this.currentId !== null) {
      this.updateBox(this.currentId, event.clientX + this.offsetX, event.clientY + this.offsetY);
    }
  }

  mouseUp() {
    this.currentId = null;
  }

  updateBox(id, x, y) {
    const box = this.boxes[id];
    box.x = x;
    box.y = y;
  }
}
