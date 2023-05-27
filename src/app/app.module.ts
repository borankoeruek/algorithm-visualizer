import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationFrameModule } from './application-frame/application-frame.module';
import { AlgoVisualizerComponent } from './modules/component/algo-visualizer/algo-visualizer.component';

@NgModule({
  declarations: [AppComponent, AlgoVisualizerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApplicationFrameModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
