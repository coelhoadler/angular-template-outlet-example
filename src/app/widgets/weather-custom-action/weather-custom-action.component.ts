import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherWidgetComponent } from '../weather-widget/weather-widget.component';

@Component({
  selector: 'app-weather-custom-action',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="onClick()">Copy & Paste</button>
  `,
  styles: [
  ]
})
export class WeatherCustomActionComponent {
  weatherWidget = inject(WeatherWidgetComponent);

  onClick() {
    this.weatherWidget.actions.copyData();
    this.weatherWidget.actions.reload();
  }
}
