import { Component, OnInit } from '@angular/core';
import { ToolboxService } from '../../shared/services/toolbox.service';
import { TdLoadingService } from '@covalent/core';
import { ItemService } from '../../shared/services/item.service';

import { TdDigitsPipe } from '@covalent/core';

@Component({
  selector: 'tq-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Chart
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Sales';

  colorScheme: any = {
    domain: ['#1565C0', '#03A9F4', '#FFA726', '#FFCC80'],
  };

  // line, area
  autoScale: boolean = true;


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

    // Chart Single
    Object.assign(this, {single});
    // Chart Multi
    this.multi = multi.map((group: any) => {
      group.series = group.series.map((dataItem: any) => {
        dataItem.name = new Date(dataItem.name);
        return dataItem;
      });
      return group;
    });
  }

  // ngx transform using covalent digits pipe
  axisDigits(val: any): any {
    return new TdDigitsPipe().transform(val);
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



let single: any = [
  {
    'name': 'Transactions',
    'value': 382954.41,
  },
  {
    'name': 'Logins',
    'value': 152294,
  },
  {
    'name': 'Registrations',
    'value': 283000,
  },
  {
    'name': 'Queries',
    'value': 828921,
  },
];

let multi: any = [
  {
    'name': 'Transactions',
    'series': [
      {
        'value': 2469,
        'name': '2016-09-15T19:25:07.773Z',
      },
      {
        'value': 3619,
        'name': '2016-09-17T17:16:53.279Z',
      },
      {
        'value': 3885,
        'name': '2016-09-15T10:34:32.344Z',
      },
      {
        'value': 4289,
        'name': '2016-09-19T14:33:45.710Z',
      },
      {
        'value': 3309,
        'name': '2016-09-12T18:48:58.925Z',
      },
    ],
  },
  {
    'name': 'Logins',
    'series': [
      {
        'value': 2452,
        'name': '2016-09-15T19:25:07.773Z',
      },
      {
        'value': 4938,
        'name': '2016-09-17T17:16:53.279Z',
      },
      {
        'value': 4110,
        'name': '2016-09-15T10:34:32.344Z',
      },
      {
        'value': 3828,
        'name': '2016-09-19T14:33:45.710Z',
      },
      {
        'value': 5772,
        'name': '2016-09-12T18:48:58.925Z',
      },
    ],
  },
  {
    'name': 'Registrations',
    'series': [
      {
        'value': 4022,
        'name': '2016-09-15T19:25:07.773Z',
      },
      {
        'value': 2345,
        'name': '2016-09-17T17:16:53.279Z',
      },
      {
        'value': 5148,
        'name': '2016-09-15T10:34:32.344Z',
      },
      {
        'value': 6868,
        'name': '2016-09-19T14:33:45.710Z',
      },
      {
        'value': 5415,
        'name': '2016-09-12T18:48:58.925Z',
      },
    ],
  },
  {
    'name': 'Queries',
    'series': [
      {
        'value': 6194,
        'name': '2016-09-15T19:25:07.773Z',
      },
      {
        'value': 6585,
        'name': '2016-09-17T17:16:53.279Z',
      },
      {
        'value': 6857,
        'name': '2016-09-15T10:34:32.344Z',
      },
      {
        'value': 2545,
        'name': '2016-09-19T14:33:45.710Z',
      },
      {
        'value': 5986,
        'name': '2016-09-12T18:48:58.925Z',
      },
    ],
  },
];