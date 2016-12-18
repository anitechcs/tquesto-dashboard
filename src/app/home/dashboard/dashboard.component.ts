import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TdLoadingService } from '@covalent/core';
import { ItemService } from '../../shared/services/item.service';

@Component({
  selector: 'tq-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title: string;
  items: Object[];
  constructor(private _titleService: Title, private _itemsService: ItemService, private _loadingService: TdLoadingService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this._titleService.setTitle('Dashboard');
    this.title = this._titleService.getTitle();

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
