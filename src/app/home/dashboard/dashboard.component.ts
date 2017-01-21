import { Component, OnInit } from '@angular/core';
import { ToolboxService } from '../../shared/services/toolbox.service';
import { TdLoadingService } from '@covalent/core';
import { ItemService } from '../../shared/services/item.service';

@Component({
  selector: 'tq-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items: Object[];
  constructor(private toolbox: ToolboxService, private _itemsService: ItemService, private _loadingService: TdLoadingService) { 
    toolbox.setToolBox({
        title: "Dashboard", 
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

  ngOnInit() {
  }

  callBack(){
    console.log('Dashboard callback Called!');
  }

  ngAfterViewInit(): void {
    this._loadingService.register('items.load');
    this._itemsService.query().subscribe((items: Object[]) => {
      this.items = items;
      setTimeout(() => {
        this._loadingService.resolve('items.load');
      }, 750);
    }, (error: Error) => {
      this._itemsService.staticQuery().subscribe((items: Object[]) => {
        this.items = items;
        setTimeout(() => {
          this._loadingService.resolve('items.load');
        }, 750);
      });
    });
  }

}
