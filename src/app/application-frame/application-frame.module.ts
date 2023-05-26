import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './component/header/nav-bar/nav-bar.component';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [HeaderComponent, NavBarComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, NavBarComponent],
})
export class ApplicationFrameModule {}
