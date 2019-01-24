import { Directive, Input, TemplateRef, ViewContainerRef, EmbeddedViewRef } from '@angular/core';

@Directive({
  selector: '[appTabPane]'
})
export class TabPaneDirective {
  @Input('appTabPane') name: string;

  active: boolean;

  viewRef: EmbeddedViewRef<TabPaneDirective>;

  constructor(
    private template: TemplateRef<TabPaneDirective>,
    private container: ViewContainerRef,
  ) {}

  show() {
    if (this.viewRef) {
      this.attachView();
    } else {
      this.createView();
    }
    this.active = true;
  }

  hide() {
    this.container.detach();
    this.active = false;
  }

  createView() {
    this.viewRef = this.container.createEmbeddedView(this.template);
  }

  attachView() {
    if (this.container.length === 0) {
      this.container.insert(this.viewRef);
    }
  }

}
