import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'tq-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  sideNavOpened: boolean = true;
  isFullscreen: boolean = false;
  title: string;
  constructor(private _titleService: Title) { }

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

}
