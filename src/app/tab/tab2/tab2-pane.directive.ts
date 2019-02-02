import { Directive, Input, TemplateRef } from '@angular/core';

export type Tab2PanePosition = 'left' | 'right' | 'center';

@Directive({
  selector: '[appTab2Pane]'
})
export class Tab2PaneDirective {
  @Input('appTab2Pane') name: string;

  // 当前pane相对于active=true的pane的位置，-1为左，+1为右，0为居中。
  index: number;

  active: boolean;

  constructor(
    public template: TemplateRef<Tab2PaneDirective>,
  ) {}

  setState(active: boolean, index: number) {
    this.active = active;
    this.index = index;
  }

}
