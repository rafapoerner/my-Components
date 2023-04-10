
export class SerieChartModel {
  title?: string;
  data: Array<any>;
  color: string;
  dataLabelColor: string;
  lineWidth?: number = 4;

  constructor(data: Array<any>, title?: string, color: string = '#ffc107', lineWidth?: number, dataLabelColor: string = "#000") {
    this.data = data;
    this.title = title;
    this.color = color;
    this.dataLabelColor = dataLabelColor
    this.lineWidth = lineWidth;
  }


}

export class ChartModel {
  title?: string
  series: Array<SerieChartModel>
  xAxisPrimaryLabel?: Array<any>
  xAxisSecondaryLabel?: Array<any>
  xAxisThirdMonthLabel?: Array<any>


  constructor(title: string, series: Array<SerieChartModel>, xAxisPrimaryLabel?: Array<any>, xAxisSecondaryLabel?: Array<any>, xAxisThirdMonthLabel?: Array<any>) {

    this.series = series
    this.title = title
    this.xAxisPrimaryLabel = xAxisPrimaryLabel
    this.xAxisSecondaryLabel = xAxisSecondaryLabel
    this.xAxisThirdMonthLabel = xAxisThirdMonthLabel
  }

  convertToHighchartSeries(): any {
    let highchartSeries: Array<any> = []

    this.series.forEach(serie => {

      highchartSeries.push({
        name: serie.title,
        data: serie.data,
        color: serie.color,
        dataLabels: {
          color: `${serie.dataLabelColor}`
        },
        borderColor: '',
        lineWidth: serie.lineWidth,
      })
    })
    return highchartSeries
  }

  convertToHighchartXAxis() {
    return this.xAxisPrimaryLabel
  }

  convertToHighChartSecondXAxis() {
    return this.xAxisSecondaryLabel
  }

  convertToHighchartThirdXAxis(){
    return this.xAxisThirdMonthLabel
  }






}

