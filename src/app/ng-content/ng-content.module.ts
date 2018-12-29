import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgContentRoutingModule } from './ng-content-routing.module';
import { NgContentComponent } from './ng-content.component';
import { NgContentSimpleComponent } from './ng-content-simple/ng-content-simple.component';
import { NgContentSelectComponent } from './ng-content-select/ng-content-select.component';
import { NgContentContextComponent } from './ng-content-context/ng-content-context.component';
import { NgContentInjectComponent } from './ng-content-inject/ng-content-inject.component';
import { NgContentInjectChildComponent } from './ng-content-inject/ng-content-inject-child/ng-content-inject-child.component';

@NgModule({
  imports: [
    CommonModule,
    NgContentRoutingModule
  ],
  declarations: [
    NgContentComponent,
    NgContentSimpleComponent,
    NgContentSelectComponent,
    NgContentContextComponent,
    NgContentInjectComponent,
    NgContentInjectChildComponent,
  ],
})
export class NgContentModule { }
