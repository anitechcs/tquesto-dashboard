import { Component, OnInit } from '@angular/core';
import { ToolboxService } from '../../shared/services/toolbox.service';

@Component({
  selector: 'tq-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.scss']
})
export class ReportViewComponent implements OnInit {

  constructor(private toolbox: ToolboxService) { 
    toolbox.setToolBox({
        title: "Reports", 
        actions: [
          {icon: 'add', tooltip: 'Add', callback: this.callBack},
          {icon: 'refresh', tooltip: 'Refresh', callback: this.callBack}
        ],
        more: [
          {text: 'View All', tooltip: 'View All', callback: this.callBack},
          {text: 'Edit', tooltip: 'Edit', callback: this.callBack},
          {text: 'Delete', tooltip: 'Delete', callback: this.callBack}
        ]
    });
  }

  callBack() {

  }

  ngOnInit() {
  }

}
