import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'algorithm-visualizer';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }
}
