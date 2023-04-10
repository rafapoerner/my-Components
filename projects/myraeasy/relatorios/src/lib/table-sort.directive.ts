
import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { CellModel } from './table-relatorio/models/cell-header.model';
import { debounce } from "ts-debounce"

const rotate: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };
export type SortColumn = keyof CellModel | '';
export type SortDirection = 'asc' | 'desc' | '';
export interface SortEvent {
  cellItem: CellModel;
  column: SortColumn;
  direction: SortDirection;
}


@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})
export class TableSortDirective implements AfterViewInit {

  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Input() cellItem: CellModel = {} as CellModel;
  @Output() sort = new EventEmitter<SortEvent>();

  constructor(private element: ElementRef<HTMLElement>) {

  }

  ngAfterViewInit(): void {
    if (this.cellItem.cellBodyIndex == null) this.element.nativeElement.classList.remove("cursor");
  }

  rotate() {

    const debouncedFunc = debounce(() => {
      this.direction = rotate[this.direction];
      this.sort.emit({ column: this.sortable, direction: this.direction, cellItem: this.cellItem });
    }, 60);

    debouncedFunc();
  }
}

