import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabRoutingModule } from './tab-routing.module';
import { TabExampleComponent } from './tab-example/tab-example.component';
import { TabComponent } from './tab/tab.component';
import { TabPaneDirective } from './tab/tab-pane.directive';
import { TabExampleTimerComponent } from './tab-example/tab-example-timer/tab-example-timer.component';

@NgModule({
  imports: [
    CommonModule,
    TabRoutingModule,
  ],
  declarations: [
    TabComponent,
    TabPaneDirective,
    TabExampleComponent,
    TabExampleTimerComponent,
  ]
})
export class TabModule { }
