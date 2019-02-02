import { AnimationMetadata, style, animate } from '@angular/animations';

export type SlideType = 'in' | 'out';

export type SlideDirection = 'left' | 'right';

export const slideDuration = 300;

export function slideAnimation(slideDirection: SlideDirection, slideType: SlideType): AnimationMetadata[] {
  let from = '0';
  let to = '0';
  if (slideType === 'in' && slideDirection === 'left') {
    from = '100%';
  } else if (slideType === 'in' && slideDirection === 'right') {
    from = '-100%';
  } else if (slideType === 'out' && slideDirection === 'left') {
    to = '-100%';
  } else {
    to = '100%';
  }

  return [
    style({ transform: `translateX(${from})` }),
    animate(`${slideDuration}ms cubic-bezier(.645,.045,.355,1)`, style({ transform: `translateX(${to})` })),
  ];
}
