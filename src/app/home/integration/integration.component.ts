import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'tq-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss']
})
export class IntegrationComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.titleService.setTitle('Integration');
  }

}
