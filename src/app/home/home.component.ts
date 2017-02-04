import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../shared/services/auth.service';
import { ToolboxService } from '../shared/services/toolbox.service';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'tq-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  
  sideNavOpened: boolean = true;
  isFullscreen: boolean = false;
  fadeDiv: boolean = false;
  constructor(private router: Router, private authService: AuthService, private toolbox: ToolboxService, iconRegistry: MdIconRegistry, domSanitizer: DomSanitizer, public media: TdMediaService) { 
    iconRegistry.addSvgIconInNamespace('assets', 'logo', domSanitizer.bypassSecurityTrustResourceUrl('/assets/imgs/logo.svg'));
  }

  getTools() {
    return this.toolbox.getToolBox();
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
     // broadcast to all listener observables when loading the page
     this.media.broadcast();
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

  showPreferences() {

  }

}
