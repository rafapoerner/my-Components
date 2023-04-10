import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { SidebarClickDirective } from './sidebar-click.directive';



@NgModule({
  declarations: [
    NavbarComponent,
    SiderbarComponent,
    SidebarClickDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    NavbarComponent,
    SiderbarComponent,
    SidebarClickDirective
  ]
})
export class MyraEasyMenuModule { }
