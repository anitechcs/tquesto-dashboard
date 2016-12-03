import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { TdLoadingService, LoadingType, ILoadingOptions } from '@covalent/core';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'tq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private spinner: SpinnerService, private _loadingService: TdLoadingService, viewContainerRef: ViewContainerRef) {
    let options: ILoadingOptions = {
      name: 'main',
      type: LoadingType.Circular,
    };
    this._loadingService.createOverlayComponent(options, viewContainerRef);
  }

  ngOnInit() {
    this.spinner.hide();
  }
  
}
