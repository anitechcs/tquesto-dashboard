import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'tq-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string;
  constructor(private _titleService: Title) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this._titleService.setTitle('Dashboard');
    this.title = this._titleService.getTitle();
  }

}
