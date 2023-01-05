import { NgTemplateOutlet } from '@angular/common'; 
import { Component, inject, Input, Injector, TemplateRef } from '@angular/core';
import { WidgetActions } from '../widget-actions.service';
import { WidgetState } from '../widget-state.service';

@Component({
  selector: 'weather-widget',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    <div class="widget-header">
      <ng-container *ngTemplateOutlet="headerTemplate || defaultWidgetHeader"></ng-container>
      
      <ng-template #defaultWidgetHeader>
        <div class="widget-title">Weather Forecast</div>
        <div class="widget-sub-title">Current weather in your location</div>
      </ng-template>
    </div>
    <div class="widget-content">
      <ng-container 
        [ngTemplateOutletContext]="{ $implicit: state.data }"
        [ngTemplateOutlet]="contentTemplate || defaultWidgetContent">
      </ng-container>

      <ng-template #defaultWidgetContent>
        <div class="sky-condition">{{ state.data.skyCondition === 'sunny' ? '☀️' : '☁️' }}</div>
        <div class="temperature">{{state.data.temperature}}°C</div>
      </ng-template>
    </div>
    <div class="widget-actions">
      <ng-container 
        [ngTemplateOutlet]="actionsTemplate || defaultWidgetActions"
        [ngTemplateOutletInjector]="injector"
      ></ng-container>

      <ng-template #defaultWidgetActions>
        <button (click)="actions.reload()">Reload</button>
        <button (click)="actions.copyData()">Copy Info</button>
      </ng-template>
    </div>
  `,
  styleUrls: ['./weather-widget.component.css'],
  providers: [WidgetActions, WidgetState],
})
export class WeatherWidgetComponent {
  
  state = inject(WidgetState);
  actions = inject(WidgetActions);
  injector = inject(Injector);

  @Input()
  headerTemplate?: TemplateRef<any>;

  @Input()
  contentTemplate?: TemplateRef<WidgetState>;

  @Input()
  actionsTemplate?: TemplateRef<WidgetState>;


}
