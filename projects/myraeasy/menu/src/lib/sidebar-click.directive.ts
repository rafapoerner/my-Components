import { Directive, ElementRef, Input } from '@angular/core';
import { ItemSiderBar } from './siderbar/models/siderbar-model';


@Directive({
  selector: 'a[itemSiderbar]'
})
export class SidebarClickDirective {

  constructor(public elementRef: ElementRef<HTMLElement>) { }

  @Input() public itemSiderbar!: ItemSiderBar;


}
