import {
  Component,
  OnInit,
  ViewContainerRef,
  Input,
  ViewChild,
  EmbeddedViewRef,
  HostBinding,
  OnChanges,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { AnimationBuilder, AnimationMetadata } from '@angular/animations';

import { Tab2PaneDirective } from './tab2-pane.directive';
import { SlideType, SlideDirection, slideAnimation } from './tab2-animation';

@Component({
  selector: 'app-tab2-body',
  template: '<ng-container #vcr></ng-container>',
  styleUrls: ['./tab2-body.component.sass']
})
export class Tab2BodyComponent implements OnInit, OnChanges {
  @ViewChild('vcr', {read: ViewContainerRef}) container: ViewContainerRef;

  @HostBinding('class.show') get showClass() {
    return this.active;
  }

  @HostBinding('class.hide') get hideClass() {
    return !this.active;
  }

  @Input() content: TemplateRef<Tab2PaneDirective>;

  @Input() active: boolean;

  @Input() position: number;

  viewRef: EmbeddedViewRef<Tab2PaneDirective>;

  constructor(
    private animationBuilder: AnimationBuilder,
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const {active: activeChange, position: positionChange} = changes;
    if (activeChange && typeof activeChange.currentValue === 'boolean') {
      this.slide(positionChange.previousValue, positionChange.currentValue);
    }
  }

  slide(from: number, to: number) {
    if (this.active) {
      this.show();
    }

    const inOut = this.active ? 'in' : 'out';
    if (typeof from === 'number' && typeof to === 'number') {
      const direction = from - to > 0 ? 'left' : 'right';
      this.animate(inOut, direction).onDone(() => {
        if (!this.active) {
          this.hide();
        }
      });
    }
  }

  show() {
    if (this.viewRef) {
      this.attachView();
    } else {
      this.createView();
    }
  }

  hide() {
    this.container.detach();
  }

  createView() {
    this.viewRef = this.container.createEmbeddedView(this.content);
  }

  attachView() {
    if (this.container.length === 0) {
      this.container.insert(this.viewRef);
    }
  }

  animate(slideType: SlideType, slideDirectiion: SlideDirection) {
    const metadata: AnimationMetadata[] = slideAnimation(slideDirectiion, slideType);
    const factory = this.animationBuilder.build(metadata);
    const element = this.viewRef.rootNodes[0];
    const player = factory.create(element);
    player.play();

    return player;
  }

}
