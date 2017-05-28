import { Component, OnInit } from '@angular/core';
import { ToolboxService } from '../shared/services/toolbox.service';

@Component({
  selector: 'tq-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor(private toolbox: ToolboxService) { 
    toolbox.setToolBox({
        title: "Events", 
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
