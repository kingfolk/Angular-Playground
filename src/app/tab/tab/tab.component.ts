import { Component, OnInit, ContentChildren, QueryList, AfterViewInit } from '@angular/core';
import { TabPaneDirective } from './tab-pane.directive';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.sass'],
})
export class TabComponent implements OnInit, AfterViewInit {
  @ContentChildren(TabPaneDirective) panes: QueryList<TabPaneDirective>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.selectPane(this.panes.first);
    });
  }

  selectPane(pane: TabPaneDirective) {
    this.panes.forEach((p) => {
      if (p === pane) {
        p.show();
      } else {
        p.hide();
      }
    });
  }

}
