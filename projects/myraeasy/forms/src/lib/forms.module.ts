import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputMagicEyeComponent } from './input-magic-eye/input-magic-eye.component';
import { LinkOpenBoxComponent } from './link-open-box/link-open-box.component';
import { FocusTrapDirective } from './directives/focus-trap.directive';
import { SearchPipe } from './pipes/search.pipe';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchMultiSelectPipe } from './pipes/searchMultiSelect.pipe';


@NgModule({
  declarations: [
    InputMagicEyeComponent,
    LinkOpenBoxComponent,
    FocusTrapDirective,
    SearchMultiSelectPipe,
    SearchPipe,
    MultiSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbAccordionModule,
    NgbModule
  ],
  exports: [
    InputMagicEyeComponent,
    LinkOpenBoxComponent,
    FocusTrapDirective,
    SearchPipe,
    MultiSelectComponent
  ]
})
export class MyraEasyFormsModule { }
