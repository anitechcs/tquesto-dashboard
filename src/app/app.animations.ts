import { trigger, state,  style, transition, animate } from '@angular/animations';

export const flyInOutFromTop = trigger('flyInOutFromTop', [
  transition('void => *', [
    style({
      opacity: 0,
      transform: 'translateY(-100%)'
    }),
    animate('0.1s ease-in')
  ]),
  transition('* => void', [
    animate('0.1s 0.1s ease-out', style({
      opacity: 0,
      transform: 'translateY(100%)'
    }))
  ])
]);

export const flyInOutFromBottom = trigger('flyInOutFromBottom', [
  transition('void => *', [
    style({
      opacity: 0,
      transform: 'translateY(+100%)'
    }),
    animate('0.1s ease-in')
  ]),
  transition('* => void', [
    animate('0.1s 0.1s ease-out', style({
      opacity: 0,
      transform: 'translateY(100%)'
    }))
  ])
]);

export const flyInOutFromLeft = trigger('flyInOutFromLeft', [
  transition('void => *', [
    style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
    animate('0.1s ease-in')
  ]),
  transition('* => void', [
    animate('0.1s 0.1s ease-out', style({
      opacity: 0,
      transform: 'translateX(100%)'
    }))
  ])
]);

export const flyInOutRight = trigger('flyInOutRight', [
  transition('void => *', [
    style({
      opacity: 0,
      transform: 'translateX(+100%)'
    }),
    animate('0.1s ease-in')
  ]),
  transition('* => void', [
    animate('0.1s 0.1s ease-out', style({
      opacity: 0,
      transform: 'translateX(100%)'
    }))
  ])
]);
