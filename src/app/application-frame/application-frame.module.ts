import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatButtonModule, MatMenuModule],
  exports: [HeaderComponent],
})
export class ApplicationFrameModule {}
