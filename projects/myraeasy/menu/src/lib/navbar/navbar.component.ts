import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { NavbarModel } from './model/navbal-model';


@Component({
  selector: 'myraeasy-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbTooltipConfig]
})
export class NavbarComponent implements OnInit {

  @Input() public navbarModel!: NavbarModel;
  @Output() public onEventNavigation: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public navigationClick(target: string) {
    this.onEventNavigation.emit(target)
  }
}
