import { Component, Input, OnInit } from '@angular/core';
import { AccordionModel } from './models/accordion.models';

import { DataService } from './services/data.service';
import { ChartModel } from '@myraeasy/charts';


@Component({
  selector: 'myraeasy-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() accordions!: AccordionModel

  constructor(private dataService: DataService) { }

  //chart: ChartModel = new ChartModel("16.000", "1.000", "10", "20 21 22 23 24 25 26 27 28 29 30 31", "1 2 3 4 5 6 7 8 9", "10 11 12 13 14 15 16 17 18 19", "Out", "Nov", this.dataService, this.dataService);

  accordion: AccordionModel = new AccordionModel("16.000", "1.000", "10", "20 21 22 23 24 25 26 27 28 29 30 31", "1 2 3 4 5 6 7 8 9",
    "10 11 12 13 14 15 16 17 18 19", "Out", "Nov", this.dataService, this.dataService);

  ngOnInit() {
  }

}
