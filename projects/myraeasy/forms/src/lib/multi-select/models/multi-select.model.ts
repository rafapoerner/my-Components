export class ListMultiSelectModel {
  dropdownList!: ItemMultiSelectModel[]
  title!: string

  constructor(dropdownList: ItemMultiSelectModel[], title: string) {
    this.dropdownList = dropdownList
    this.title = title
  }
}

export class ItemMultiSelectModel{
  value!: number
  label!: string;
  selected!: boolean;

  constructor(value: number, label: string, selected: boolean){
    this.value = value
    this.label = label
    this.selected = selected
  }
}
