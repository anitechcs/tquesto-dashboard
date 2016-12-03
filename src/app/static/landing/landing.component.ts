import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
declare var Particles: any;
declare var classie: any;
declare var $: any;

@Component({
  selector: 'tq-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  particleOptions = {
    selector: '#particles',
    color: '#ffffff',
    maxParticles: '50',
    sizeVariations: '3',
    speed: '0.1',
    minDistance: '100',
    connectParticles: 'true'
  };
  @ViewChild('tabElem') el:ElementRef;

  header = document.querySelector('.navbar-default');
  didScroll = false;
  changeHeaderOn = 50;

  constructor() { }

  ngOnInit() {
    Particles.init(this.particleOptions);
  }

  ngAfterViewInit() {
    // ABOUT SECTION TABS
    $(this.el.nativeElement).easytabs({
      animationSpeed: 'normal',
      updateHash: false
    });
  }

  @HostListener('document:scroll', ['$event'])
  onPageScroll(ev: UIEvent) {
    if ((window.pageYOffset || document.documentElement.scrollTop) >= this.changeHeaderOn) {
      this.didScroll = true;
    } else {
      this.didScroll = false;
    }
  }

}
