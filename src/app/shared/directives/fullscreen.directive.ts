import { Directive, HostListener } from '@angular/core';
const screenfull = require('screenfull');

@Directive({
  selector: '[tqFullscreen]'
})
export class FullscreenDirective {

  @HostListener('click') onClick() {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    }

}
