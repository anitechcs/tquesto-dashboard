import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      HeaderComponent,
      FooterComponent,
      SidebarComponent
  ]
})
export class SharedModule { }
