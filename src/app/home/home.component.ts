import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdIconRegistry } from '@angular/material';
import { Title, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'tq-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  sideNavOpened: boolean = true;
  isFullscreen: boolean = false;
  title: string;
  constructor(private _titleService: Title, private router: Router, iconRegistry: MdIconRegistry, domSanitizer: DomSanitizer) { 
    iconRegistry.addSvgIconInNamespace('assets', 'logo', domSanitizer.bypassSecurityTrustResourceUrl('/assets/imgs/logo.svg'));
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this._titleService.setTitle('Dashboard');
    this.title = this._titleService.getTitle();
  }

  toggleSidebar() {
    this.sideNavOpened = !this.sideNavOpened;
  }

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }

  doLogout() {
    this.router.navigate(['/']);
  }

}
