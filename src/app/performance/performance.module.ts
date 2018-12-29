import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';
import { PerformanceComponent } from './performance.component';
import { PerformanceSvgComponent } from './performance-svg/performance-svg.component';
import { PerformanceSvgBoxComponent } from './performance-svg/performance-svg-box/performance-svg-box.component';
import { PerformanceOnpushComponent } from './performance-onpush/performance-onpush.component';
import { PerformanceOnpushBoxComponent } from './performance-onpush/performance-onpush-box/performance-onpush-box.component';
import { PerformanceZoneComponent } from './performance-zone/performance-zone.component';
import { PerformanceEventComponent } from './performance-event/performance-event.component';
import { PerformanceEventBoxComponent } from './performance-event/performance-event-box/performance-event-box.component';

@NgModule({
  imports: [
    CommonModule,
    PerformanceRoutingModule
  ],
  declarations: [
    PerformanceComponent,
    PerformanceSvgComponent,
    PerformanceSvgBoxComponent,
    PerformanceOnpushComponent,
    PerformanceOnpushBoxComponent,
    PerformanceZoneComponent,
    PerformanceEventBoxComponent,
    PerformanceEventComponent,
  ]
})
export class PerformanceModule { }
