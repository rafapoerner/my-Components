import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartComponent } from './chart/chart.component';



@NgModule({
  declarations: [
    ChartComponent,


  ],
  imports: [

    CommonModule,
    RouterModule,
    NgbModule,
    ChartModule,
    HighchartsChartModule
  ],
  exports: [
    ChartComponent,
  ]
})
export class ChartsModule { }
