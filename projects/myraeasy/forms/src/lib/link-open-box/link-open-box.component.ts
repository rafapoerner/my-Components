import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ItemSelected, LinkOpenBoxModel } from './models/link-openbox.model';

@Component({
  selector: 'myraeasy-openbox',
  templateUrl: './link-open-box.component.html',
  styleUrls: ['./link-open-box.component.scss']
})

export class LinkOpenBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.list = this.model.list;
  }

  @Input() public model!: LinkOpenBoxModel
  @Output("clickButton") public onclickButton: EventEmitter<any> = new EventEmitter();
  @Output("clickItemSelected") public onclickItem: EventEmitter<ItemSelected> = new EventEmitter();

  public openBox: boolean = false;
  public search!: string;
  public list: ItemSelected[] = [];

  public closeBox(event: Event) {
    this.openBox = false;
    event.stopPropagation();
    document.removeEventListener("click", () => { this.attachEvent(true) })
  }

  public showBox(event: Event) {
    this.openBox = true;
    event.stopPropagation();
    document.addEventListener("click", () => { this.attachEvent(false) })
  }

  private attachEvent(value: boolean) {
    this.openBox = value;
  }

  public onKeyUp(event: any) {
    this.list = this.model.list;
  }

  public eventClick() {
    this.onclickButton.emit(this.model.valueButton);
  }
  public eventClickLink(item: ItemSelected) {
    this.onclickButton.emit(item);
  }
}
