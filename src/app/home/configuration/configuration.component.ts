import { Component, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TdLoadingService } from '@covalent/core';
import { TdDialogService } from '@covalent/core';
import { ConfigurationService, IConfiguration } from '../../shared/services/configuration.service';

@Component({
  selector: 'tq-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements AfterViewInit {

  features: IConfiguration[];
  filteredFeatures: IConfiguration[];

  constructor(private _titleService: Title,
              private _dialogService: TdDialogService,
              private _featuresService: ConfigurationService,
              private _loadingService: TdLoadingService) {

  }
  openConfirm(id: string): void {
    this._dialogService.openConfirm({
      message: 'Are you sure you want to delete this feature? It\'s being used!',
      title: 'Confirm',
      cancelButton: 'No, Cancel',
      acceptButton: 'Yes, Delete',
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this.deleteFeature(id);
      } else {
        // DO SOMETHING ELSE
      }
    });
  }
  ngAfterViewInit(): void {
    this._titleService.setTitle( 'Product Features' );
    this.loadFeatures();
  }
  filterFeatures(filterTitle: string = ''): void {
    this.filteredFeatures = this.features.filter((feature: IConfiguration) => {
      return feature.title.toLowerCase().indexOf(filterTitle.toLowerCase()) > -1;
    });
  }

  loadFeatures(): void {
    this._loadingService.register('features.list');
    this._featuresService.query().subscribe((features: IConfiguration[]) => {
      this.features = features;
      this.filteredFeatures = features;
      this._loadingService.resolve('features.list');
    }, (error: Error) => {
      this._featuresService.staticQuery().subscribe((features: IConfiguration[]) => {
        this.features = features;
        this.filteredFeatures = features;
        this._loadingService.resolve('features.list');
      });
    });
  }
  deleteFeature(id): void {
    this._loadingService.register('features.list');
    this._featuresService.delete(id).subscribe(() => {
      this.features = this.features.filter((feature: IConfiguration) => {
        return feature.id !== id;
      });
      this.filteredFeatures = this.filteredFeatures.filter((feature: IConfiguration) => {
        return feature.id !== id;
      });
      this._loadingService.resolve('features.list');
    }, (error: Error) => {
      this._loadingService.resolve('features.list');
    });
  }

}
