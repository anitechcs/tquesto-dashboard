import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../shared/services/auth.service';
import { ToolboxService } from '../shared/services/toolbox.service';

@Component({
  selector: 'tq-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  sideNavOpened: boolean = true;
  isFullscreen: boolean = false;
  fadeDiv: boolean = false;
  constructor(private router: Router, private authService: AuthService, private toolbox: ToolboxService, iconRegistry: MdIconRegistry, domSanitizer: DomSanitizer) { 
    iconRegistry.addSvgIconInNamespace('assets', 'logo', domSanitizer.bypassSecurityTrustResourceUrl('/assets/imgs/logo.svg'));
  }

  getTools() {
    return this.toolbox.getToolBox();
  }

  ngOnInit() {
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
