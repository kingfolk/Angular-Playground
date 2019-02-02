import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  Input,
} from '@angular/core';
import { Tab2PaneDirective } from './tab2-pane.directive';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.sass'],
})
export class Tab2Component implements OnInit, AfterViewInit {
  @ContentChildren(Tab2PaneDirective) panes: QueryList<Tab2PaneDirective>;

  @ViewChildren('item') headItems: QueryList<ElementRef<HTMLElement>>;

  linkBarStyle = {left: 0, width: 0};

  get paneArr() {
    return this.panes.toArray();
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.selectPane(this.panes.first);
    });
  }

  renderLinkBar(activeIdx: number) {
    const itemArr = this.headItems.toArray();
    let left = itemArr[0].nativeElement.offsetLeft;
    itemArr.slice(0, activeIdx).forEach((i) => {
      left += i.nativeElement.offsetWidth;
    });
    const item = itemArr[activeIdx].nativeElement;
    const {offsetWidth: width} = item;
    Object.assign(this.linkBarStyle, {left, width});
  }

  selectPane(pane: Tab2PaneDirective) {
    const activeIdx = this.paneArr.findIndex((p) => p === pane);
    this.panes.forEach((p, i) => {
      p.setState(p === pane, i - activeIdx);
    });
    this.renderLinkBar(activeIdx);
  }

}
