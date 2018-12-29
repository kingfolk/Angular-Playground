import { Component, OnInit, AfterContentChecked } from '@angular/core';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


@Component({
  selector: 'app-performance-onpush',
  templateUrl: './performance-onpush.component.html',
  styleUrls: ['./performance-onpush.component.sass']
})
export class PerformanceOnpushComponent implements OnInit {

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
    this.boxes[id] = { id, x, y };
  }

}
