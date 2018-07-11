import { Component, OnInit, OnDestroy, ContentChild, TemplateRef } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-ng-content-context',
  template: '<ng-container *ngTemplateOutlet="template; context: context"></ng-container>',
  styleUrls: ['./ng-content-context.component.sass']
})
export class NgContentContextComponent implements OnInit, OnDestroy {
  @ContentChild(TemplateRef, {read: TemplateRef}) template: TemplateRef<{$implicit: number; timer: number}>;

  timer = 0;

  intervalSub: Subscription;

  get context() {
    const {timer} = this;
    return {
      $implicit: timer,
      timer,
    };
  }

  constructor() { }

  ngOnInit() {
    this.intervalSub = interval(1000).subscribe(() => {
      this.timer ++;
    });
  }

  ngOnDestroy() {
    this.intervalSub.unsubscribe();
  }

}
