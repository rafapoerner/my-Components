import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'myraeasy-input-magic-eye',
  templateUrl: './input-magic-eye.component.html',
  styleUrls: ['./input-magic-eye.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => InputMagicEyeComponent) }]
})
export class InputMagicEyeComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  private innerValue: any;
  public openText: boolean = false;
  @Input() public classInput: string = "";


  get value() {
    return this.innerValue;
  }
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }


  //#region  ControlValueAccessor

  // to using in Angular
  onChangeCb: (value: any) => void = () => { };
  onTouchCb: (value: any) => void = () => { };

  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchCb = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  //#endregion  ControlValueAccessor

  ngOnInit(): void {

  }

  public onOpenText() {
    this.openText = !this.openText
  }


}


