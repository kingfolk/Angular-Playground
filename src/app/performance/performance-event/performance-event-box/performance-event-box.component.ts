import { Component, OnInit, Input, DoCheck, HostListener } from '@angular/core';

@Component({
  selector: '[app-performance-event-box]',
  templateUrl: './performance-event-box.component.html',
  styleUrls: ['./performance-event-box.component.sass']
})
export class PerformanceEventBoxComponent implements OnInit, DoCheck {
  @Input() box;
  @Input() selected;

  offsetX;
  offsetY;

  bindMouse = (ev) => {
    this.mouseMove(ev);
  }

  @HostListener('mousedown', ['$event']) mouseDown(event) {
    this.offsetX = this.box.x - event.clientX;
    this.offsetY = this.box.y - event.clientY;
    document.addEventListener('mousemove', this.bindMouse);
  }

  @HostListener('mouseup') mouseUp() {
    document.removeEventListener('mousemove', this.bindMouse);
  }

  mouseMove(event) {
    event.preventDefault();
    this.updateBox(event.clientX + this.offsetX, event.clientY + this.offsetY);
  }

  updateBox(x, y) {
    this.box.x = x;
    this.box.y = y;
  }

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.box.id % 100 === 0) {
      console.log('box ngDoCheck');
    }
  }

}
