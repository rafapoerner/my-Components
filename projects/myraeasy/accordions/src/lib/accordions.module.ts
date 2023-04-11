import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AccordionComponent } from './accordions/accordion/accordion.component';

@NgModule({
  declarations: [
    AccordionComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,

  ],
  exports: [
    AccordionComponent
  ]
})
export class AccordionModule { }
