import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WeatherCustomActionComponent } from './widgets/weather-custom-action/weather-custom-action.component';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WeatherWidgetComponent, WeatherCustomActionComponent],
  template: `
    <weather-widget
      [headerTemplate]="customizeHeaderTemplate"
      [contentTemplate]="customizeContentTemplate"
      [actionsTemplate]="customizeActionsTemplate"
    >
    </weather-widget>

    <ng-template #customizeHeaderTemplate>
      <div class="alt-header">Como está o dia hoje?</div>
    </ng-template>

    <ng-template #customizeContentTemplate let-state>
      <div>
        <span> 🌡 {{ state.temperature }}</span> - 
        <span>{{ state.skyCondition == 'sunny' ? '🌞' : '❄' }}</span> - 
        <span>🌬 {{ state.windspeed }} m/s</span>
      </div>
    </ng-template>

    <ng-template #customizeActionsTemplate>
      <app-weather-custom-action></app-weather-custom-action>
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
