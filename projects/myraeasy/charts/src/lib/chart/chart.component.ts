import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as console from 'console';
import * as Highcharts from 'highcharts';
import { Observable } from 'rxjs';
import { ChartModel } from './models/charts.models';
import { DataService } from './services/data.service';


@Component({
  selector: 'myraeasy-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})


export class ChartComponent implements OnInit {



  @Input() chartOptions$!: Observable<ChartModel>


  public chart!: Chart

  chartService!: DataService


  ngOnInit() {
    this.newChart()

  }



  constructor() { }

  Highcharts = Highcharts;
  newChart() {
    this.chartOptions$.subscribe((chartOptions: ChartModel) => {
      this.chart = new Chart({
        chart: {
          type: 'column'
        },
        title: {
          text: ''
        },

        plotOptions: {

          column: {
            events:{
              click: function(){
                alert('oi')
              }
            },
            grouping: true,
            dataLabels: {
              enabled: false,
              color: '#626568',
              align: "center",
              format: '{y}%',
              inside: true,
              style: {
                fontWeight: 'bold',
                fontFamily: 'Arial',
                textOutline: "none"
              },
              verticalAlign: "top"
            }
          },

        },

        subtitle: {
          text: ''
        },

        legend: {
          align: 'right',
          verticalAlign: 'top',
          layout: 'horizontal'
        },

        yAxis: {
          allowDecimals: false,
          title: {
            text: ''
          }
        },

        credits: {
          enabled: false
        },

        xAxis: [
          {

            categories: chartOptions.convertToHighchartXAxis(),
            events:{
              setExtremes: function(){
                alert('clicado')
              }
            },
            labels: {
              format: '<div style="text-align:center; height:2px;">{value}</div> ',
              formatter: function (): any {

                var label = this.axis.defaultLabelFormatter.call(this)

                if (label == "S" || label == "D") {
                  return `<span style="color: red">${label}</span>`
                }
                return label;
              },
              useHTML: true,
              style: {
                fontSize: '12px',
                color: 'black',
                fontWeight: 'bold'
              },

            },
          },
          {
            categories: chartOptions.convertToHighChartSecondXAxis(),
            linkedTo: 0,
            lineWidth: 0,
            margin: -14,

            labels: {
              useHTML: true,
              style: {
                fontSize: '17px',
                color: 'black',
                fontWeight: '900'
              }
            }

          },
          {
            categories: chartOptions.convertToHighchartThirdXAxis(),
            linkedTo: 0,
            lineWidth: 0,
            margin: -14,

            labels: {
              useHTML: true,
              style: {
                fontSize: '17px',
                color: 'black',
                fontWeight: '900'
              }
            }

          },

        ],


        series: chartOptions.convertToHighchartSeries(),
      })

    })
  }
}






/**
 *  document.getElementById("test").addEventListener("click", function( event ) {
    // mostra o contador de cliques dentro da div clicada
    event.target.innerHTML = "Total de cliques: " + event.detail;
 */
