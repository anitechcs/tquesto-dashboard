import { Component, OnInit } from '@angular/core';
import { ToolboxService } from '../../shared/services/toolbox.service';

@Component({
  selector: 'tq-myapps',
  templateUrl: './myapps.component.html',
  styleUrls: ['./myapps.component.scss']
})
export class MyappsComponent implements OnInit {

  constructor(private toolbox: ToolboxService) { 
    toolbox.setToolBox({
        title: "Apps", 
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
