import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdIconRegistry } from '@angular/material';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'tq-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  sideNavOpened: boolean = true;
  isFullscreen: boolean = false;
  fadeDiv: boolean = false;
  title: string;
  constructor(private titleService: Title, private router: Router, private authService: AuthService, iconRegistry: MdIconRegistry, domSanitizer: DomSanitizer) { 
    iconRegistry.addSvgIconInNamespace('assets', 'logo', domSanitizer.bypassSecurityTrustResourceUrl('/assets/imgs/logo.svg'));
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.titleService.setTitle('Dashboard');
    this.title = this.titleService.getTitle();
  }

  toggleSidebar() {
    this.sideNavOpened = !this.sideNavOpened;
  }

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }

  doLogout() {
    this.fadeDiv = true;
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
