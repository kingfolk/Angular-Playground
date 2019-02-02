import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabRoutingModule } from './tab-routing.module';
import { TabComponent } from './tab/tab.component';
import { TabPaneDirective } from './tab/tab-pane.directive';
import { Tab2Component } from './tab2/tab2.component';
import { Tab2PaneDirective } from './tab2/tab2-pane.directive';
import { Tab2BodyComponent } from './tab2/tab2-body.component';
import { TabExampleComponent } from './tab-example/tab-example.component';
import { TabExampleTimerComponent } from './tab-example/tab-example-timer/tab-example-timer.component';

@NgModule({
  imports: [
    CommonModule,
    TabRoutingModule,
  ],
  declarations: [
    TabComponent,
    TabPaneDirective,
    Tab2Component,
    Tab2BodyComponent,
    Tab2PaneDirective,
    TabExampleComponent,
    TabExampleTimerComponent,
  ]
})
export class TabModule { }
