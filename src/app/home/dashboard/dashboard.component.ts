import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'tq-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title: string;
  constructor(private _titleService: Title) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this._titleService.setTitle('Dashboard');
    this.title = this._titleService.getTitle();
  }

}
