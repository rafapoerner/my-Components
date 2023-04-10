import { AfterViewInit, Component, Input, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { fromEvent, merge, Observable, Subscription } from 'rxjs';
import { SidebarClickDirective } from '../sidebar-click.directive';
import { ItemSiderBar, ItemSiderBarChildren, SiderbarModel } from './models/siderbar-model';

@Component({
  selector: 'myraeasy-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.scss']
})
export class SiderbarComponent implements AfterViewInit, OnDestroy {

  @ViewChildren(SidebarClickDirective) itens!: QueryList<SidebarClickDirective>
  @Input() public siderbarModel!: SiderbarModel;

  public itensSubMenu$!: Observable<ItemSiderBarChildren[]>;
  public titleSubmenu!: string;
  public showSubMenu: boolean = false;
  public showLabels: boolean = false;
  private subscription!: Subscription;

  constructor(private router: Router) { }


  ngAfterViewInit(): void {

    this.onclickMenu();
    this.subscription = this.router.events.subscribe((event) => this.ativarDesativarItemMenu(event));
  }

  private onclickMenu() {

    let itensMenu = this.itens.map(item => fromEvent(item.elementRef.nativeElement, "click"));
    merge(...itensMenu).subscribe(item => this.ativarDesativarItemMenu(item))
  }

  private ativarDesativarItemMenu(event: any) {

    if (event instanceof NavigationStart) {

      this.itens.forEach(ele => {

        event.url.includes(ele.itemSiderbar.url)
          ? ele.elementRef.nativeElement.classList.add("active")
          : ele.elementRef.nativeElement.classList.remove("active")
      })

    } else if (event instanceof PointerEvent) {

      event.preventDefault();
      event.stopPropagation()

      let element = event.target as HTMLHtmlElement
      this.itens.forEach(i => i.elementRef.nativeElement.classList.remove("active"));
      element.closest("a")?.classList.add("active");
    }


  }

  public openMenu() {

    this.showSubMenu = false;
    this.showLabels = !this.showLabels;
  }

  public getSubItens(item: ItemSiderBar) {

    if (item.subItens.length < 1) {
      this.router.navigate([`${item.url}`])
      this.showSubMenu = false;
      return;
    }

    this.itensSubMenu$ = new Observable<ItemSiderBarChildren[]>(subscriber => {
      subscriber.next(item.subItens);
      subscriber.unsubscribe();
    })


    if (this.titleSubmenu === item.label)
      this.showSubMenu = !this.showSubMenu
    else
      this.showSubMenu = true;

    this.titleSubmenu = item.label
    this.showLabels = false;
  }


  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
