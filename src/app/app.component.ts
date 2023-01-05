import { Component } from '@angular/core';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherWidgetComponent],
  template: `
    <weather-widget
      [headerTemplate]="customizeHeaderTemplate">
    </weather-widget>

    <ng-template #customizeHeaderTemplate>
      <div class="alt-header">Como está o dia hoje?</div>
    </ng-template>
  `,
  styles: [`
    :host {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class AppComponent {
}
