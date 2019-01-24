import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'ng-content',
    loadChildren: './ng-content/ng-content.module#NgContentModule',
  },
  {
    path: 'performance',
    loadChildren: './performance/performance.module#PerformanceModule',
  },
  {
    path: 'lazy-tab',
    loadChildren: './tab/tab.module#TabModule',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
