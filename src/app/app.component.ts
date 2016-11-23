import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'tq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tq works!';
  routes: Object[] = [{
      title: 'Dashboard',
      route: '/',
      icon: 'dashboard',
    }, {
      title: 'Product Dashboard',
      route: '/product',
      icon: 'view_quilt',
    }, {
      title: 'Product Logs',
      route: '/logs',
      icon: 'receipt',
    }, {
      title: 'Manage Users',
      route: '/users',
      icon: 'people',
    },
  ];
  
}
