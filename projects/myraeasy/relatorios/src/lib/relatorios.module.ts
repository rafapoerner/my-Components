import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbAccordionModule, NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchTablePipe } from './filtro-search.pipe';


import { TableRelatorioComponent } from './table-relatorio/table-relatorio.component';
import { TableSortDirective } from './table-sort.directive';


@NgModule({
  declarations: [
    TableRelatorioComponent,
    TableSortDirective,
    SearchTablePipe
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgbTypeaheadModule,
    NgbAccordionModule,
    NgbModule
  ],
  exports: [
    TableRelatorioComponent,
    TableSortDirective,
    SearchTablePipe
  ]
  ,
  providers: [
    DecimalPipe,
    DatePipe,
    { provide: LOCALE_ID, useValue: "pt" }
  ]
})
export class MyraeasyRelatoriosModule {

}
