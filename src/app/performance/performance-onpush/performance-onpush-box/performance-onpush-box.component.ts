import { Component, OnInit, Input, ChangeDetectionStrategy, AfterContentChecked } from '@angular/core';

@Component({
  selector: '[app-performance-onpush-box]',
  templateUrl: './performance-onpush-box.component.html',
  styleUrls: ['./performance-onpush-box.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerformanceOnpushBoxComponent implements OnInit {
  @Input() box;
  @Input() selected;

  constructor() { }

  ngOnInit() {
  }

}
