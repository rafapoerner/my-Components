import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription, } from 'rxjs';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import * as XLSX from 'xlsx';

import { SortEvent, TableSortDirective } from '../table-sort.directive';
import { CellModel, CollectionCellModel } from './models/cell-header.model';

import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { GridModel } from './models/grid-model';

@Component({
  selector: 'myraeasy-grid',
  templateUrl: './table-relatorio.component.html',
  styleUrls: ['./table-relatorio.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbAccordionConfig]
})
export class TableRelatorioComponent implements OnInit, OnDestroy {

  constructor(private datePipe: DatePipe, private decimalPipe: DecimalPipe, config: NgbAccordionConfig) {
    registerLocaleData(localePt);
    config.type = "accordion-custom";
  }


  @ViewChildren(TableSortDirective) headers!: QueryList<TableSortDirective>;
  @Input() public gridModel!: GridModel;
  public collectionBody$!: Observable<CollectionCellModel[]>;
  public collectionsHeader$!: Observable<CollectionCellModel[]>;

  public codigo: string = "";
  public collections!: CollectionCellModel[]
  public collectionsHeader!: CollectionCellModel[]
  public showOptions!: boolean;

  private subscriptionExport!: Subscription;
  private subscriptionFilter!: Subscription;
  private subscriptionCollec!: Subscription;
  private subscriptionCollecHeader!: Subscription;
  private subscriptionCodigo!: Subscription;



  ngOnInit(): void {


    this.showOptions = this.gridModel.showOptions;
    this.subscriptionExport = this.gridModel.onExportTable.subscribe(() => this.exportarTabela());
    this.subscriptionFilter = this.gridModel.onFilterText.subscribe(event => this.search = event);

    this.collectionsHeader$ = this.gridModel.getRowsHeader
    this.collectionBody$ = this.gridModel.getRowsBody;

    this.subscriptionCollecHeader = this.collectionsHeader$.subscribe(collectionsHeader => this.collectionsHeader = collectionsHeader);
    this.subscriptionCollec = this.collectionBody$.subscribe(collections => this.collections = collections);

    this.subscriptionCodigo = this.gridModel.codigo$.subscribe(cod => this.codigo = cod)
  }

  public getClasses(th: CellModel, index: number): string {
    let classes: string[] = [
      this.getClassCenter(th),
      this.getClassRounded(th, index)
    ];

    return classes.join(" ");
  }

  private getClassRounded(th: CellModel, index: number): string {
    if (th.rounded == false) return "";
    return index == 0 ? "rounded-left" : "rounded-right";
  }
  private getClassCenter(th: CellModel): string {

    if (th.classCustom != null && th.classCustom.length > 0)
      return th.classCustom

    return ""
  }

  public getClassLinkUrl(classes?: string): string {
    return classes == null ? "" : classes
  }

  public input = new FormControl('');

  search!: string
  public filter(target: any) {
    let input = target as HTMLInputElement;
    this.search = input.value;
  }

  public onSort({ column, direction, cellItem }: SortEvent) {

    if (cellItem.colSpan == 2 && cellItem.rowSpan == 1 || cellItem.cellBodyIndex == null) return;

    let index = cellItem.cellBodyIndex;
    let collections = this.collections;

    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.collections = [...collections].sort((a, b) => {

      let c = a.cells[index].label
      let d = b.cells[index].label
      let res = (c: any, d: any) => {

        if (c < d) return -1;
        if (c > d) return 1;
        return 0
      }

      let value = res(c, d)

      return direction === 'asc' ? value : -value;;
    });
  }



  public exportarTabela(): void {

    try {

      let element = document.getElementById(this.codigo);
      const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Ingestao');

      const filenme = `${new Date().toLocaleDateString()}-Ingestao.xlsx`;
      XLSX.writeFile(wb, filenme);

    } catch {

    }
  }

  public convert(item: CellModel) {

    if (item.label instanceof Date)
      return this.datePipe.transform(item.label, "dd/MM/yyyy");

    if (typeof item.label == "number") {
      return this.decimalPipe.transform(parseInt(item.label.toString()));
    }

    return item.label as string;
  }

  ngOnDestroy(): void {

    this.subscriptionExport?.unsubscribe();
    this.subscriptionFilter?.unsubscribe();
    this.subscriptionCollec?.unsubscribe();
    this.subscriptionCodigo?.unsubscribe();
    this.subscriptionCollecHeader?.unsubscribe();
  }

}
