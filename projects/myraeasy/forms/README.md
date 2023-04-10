#  Forms 

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Olho magico 
## Html

``` html
<myraeasy-input-magic-eye formControlName="objeto"> </myraeasy-input-magic-eye>
```
## Visão box select 

## Typescript
``` javascript
 private linkList: ItemSelected[] = [
    { codigo: 1, label: "Minha Visão VIVO Geral" },
    { codigo: 1, label: "Minha Visão VIVO VENDER B2C" },
    { codigo: 1, label: "Minha Visao OI" },
    { codigo: 1, label: "Teste 123" },
    { codigo: 1, label: "Teste 12345" },
    { codigo: 1, label: "Teste Visão VIVO Geral 12312312313212131" },
  ]

  public openBoxModel = new LinkOpenBoxModel(this.linkList, "Trocar Visão", "valor button");

  public clickButtonOpenBox(event: any) {
    console.log("evento disparado buton", event);
  }
  public itemSelected(item: ItemSelected) {
    console.log("evento disparado link", item);
  }
```

##  HTML
``` html
   <myraeasy-openbox 
        [model]="openBoxModel" (clickButton)="clickButtonOpenBox($event)"
        (clickItemSelected)="itemSelected($event)">
   </myraeasy-openbox>
					
```


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
