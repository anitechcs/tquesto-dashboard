import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';
import { ToolboxService } from '../shared/services/toolbox.service';
import { TdMediaService } from '@covalent/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { PreferenceComponent } from '../user/preference/preference.component';

@Component({
  selector: 'tq-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  selectedTheme: string;
  sideNavOpened = true;
  isFullscreen = false;
  fadeDiv = false;
  // tslint:disable-next-line:max-line-length
  constructor(private userService: UserService, private router: Router, private authService: AuthService, private toolbox: ToolboxService, iconRegistry: MdIconRegistry, domSanitizer: DomSanitizer, public media: TdMediaService, public dialog: MdDialog) {
    iconRegistry.addSvgIconInNamespace('assets', 'logo', domSanitizer.bypassSecurityTrustResourceUrl('/assets/imgs/logo.svg'));
    this.selectedTheme = userService.getTheme();
  }

  getTools() {
    return this.toolbox.getToolBox();
  }

  ngOnInit() {

  }

  getSelectedTheme() {
    return this.userService.getTheme();
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
    this.dialog.open(PreferenceComponent, {'disableClose': true});
  }

}
