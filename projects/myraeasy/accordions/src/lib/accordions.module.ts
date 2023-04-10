import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ChartsModule } from '@myraeasy/charts';
import { AccordionComponent } from './accordions/accordion/accordion.component';

@NgModule({
  declarations: [
    AccordionComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    ChartsModule
  ],
  exports: [
    AccordionComponent
  ]
})
export class AccordionModule { }
