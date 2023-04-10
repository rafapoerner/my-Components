import { DataService } from "../services/data.service";

export class AccordionModel {

  goal: string;
  accomplished: string;
  average: string;
  chartDays1: string;
  chartDays2: string;
  chartDays3: string;
  chartMounth1: string;
  chartMounth2: string;
  columnDataPlanned: DataService;
  columnDataAccomplished: DataService;

  constructor(goal: string, accomplished: string, average: string,
    chartDays1: string, chartDays2: string, chartDays3: string,
    chartMounth1: string, chartMounth2: string, columnDataPlanned: DataService, columnDataAccomplished: DataService) {

    this.goal = goal,
    this.accomplished = accomplished,
    this.average = average,
    this.chartDays1 = chartDays1,
    this.chartDays2 = chartDays2
    this.chartDays3 = chartDays3
    this.chartMounth1 = chartMounth1,
    this.chartMounth2 = chartMounth2,
    this.columnDataPlanned = columnDataPlanned,
    this.columnDataAccomplished = columnDataAccomplished
  }

}
