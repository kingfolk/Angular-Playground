import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerformanceComponent } from './performance.component';
import { PerformanceSvgComponent } from './performance-svg/performance-svg.component';
import { PerformanceOnpushComponent } from './performance-onpush/performance-onpush.component';
import { PerformanceZoneComponent } from './performance-zone/performance-zone.component';
import { PerformanceEventComponent } from './performance-event/performance-event.component';

const routes: Routes = [
  {
    path: '',
    component: PerformanceComponent,
  },
  {
    path: 'normal',
    component: PerformanceSvgComponent,
  },
  {
    path: 'onpush',
    component: PerformanceOnpushComponent,
  },
  {
    path: 'ngzone',
    component: PerformanceZoneComponent,
  },
  {
    path: 'event',
    component: PerformanceEventComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceRoutingModule { }
