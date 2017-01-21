import { Component, OnInit } from '@angular/core';
import { ToolboxService } from '../../shared/services/toolbox.service';

@Component({
  selector: 'tq-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss']
})
export class IntegrationComponent implements OnInit {

  constructor(private toobox: ToolboxService) { 
    this.toobox.setToolBox({
        title: "Integration", 
        actions: [
          {icon: 'add', tooltip: 'Add', callback: this.callBack},
          {icon: 'refresh', tooltip: 'Refresh', callback: this.callBack}
        ]
    });
  }

  ngOnInit() {
  }

  callBack() {
    console.log('Integration callback');
  }

}
