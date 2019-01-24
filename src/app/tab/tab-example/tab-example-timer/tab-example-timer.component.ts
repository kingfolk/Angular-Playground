import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-tab-example-timer',
  templateUrl: './tab-example-timer.component.html',
  styleUrls: ['./tab-example-timer.component.sass']
})
export class TabExampleTimerComponent implements OnInit, OnDestroy {

  intervalSub: Subscription;

  tick = 0;

  constructor() { }

  ngOnInit() {
    this.intervalSub = interval(1000).subscribe(() => {
      this.tick ++;
    });
  }

  ngOnDestroy() {
    this.intervalSub.unsubscribe();
  }

}
