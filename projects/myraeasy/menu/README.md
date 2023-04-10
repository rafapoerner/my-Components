# Menu

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Navbar

### Typescript
dentro do compoenente onde vai ser utilizado criar o model ,
``` javascript

  public navbar: NavbarModel = new NavbarModel("/assets/logos/logo-myra-home.svg")

  public navigationNavbar(event: string) {
    console.log(event)
  } 

 // eventos disparados
  (click)="navigationClick('home')
  (click)="navigationClick('logout')"
  (click)="navigationClick('resetpassword') 
  (click)="navigationClick('profile')"

```
### HTML

```html
<myraeasy-navbar [navbarModel]="navbar" (onEventNavigation)="navigationNavbar($event)">
    <span class="title-page ">titulo da página</span>
</myraeasy-navbar>
```

## SiderBar
 A Sider bar em seu modelo recebe um objeto SiderbarModel  que recebe uma lista de ItemSiderBar , que representa corpo da siderbar. 
 Cada item pode ter um subitem que tambem é uma lista ItemSiderBarChildren para gerar links de submenu  atrelado ao seu pai.
 Ela tem capacidade de ser gerada dynamicamente.
 
### Typescript

``` javascript 
  // local onde estao icones da sider bar
  private folder: string = "/assets/icones/siderbar/"

  private items: ItemSiderBar[] = [
    {  codigo: 1, label: "Home", icone: this.folder + "icone-siderbar-home.svg",
      url: "/home",
      subItens: []
    },
    {
      codigo: 1, label: "Monitoria", icone: this.folder + "icone-siderbar-monitoria.svg",
      url: "/monitoria",
      subItens: [
        { codigo: 2, label: "monitoria-1", url: "/monitoria/monitoria-1" },
        { codigo: 2, label: "monitoria-2", url: "/monitoria/monitoria-2" },
        { codigo: 2, label: "monitoria-3", url: "/monitoria/monitoria-33" },
        { codigo: 2, label: "monitoria-4", url: "/monitoria/monitoria-44" },
        { codigo: 2, label: "monitoria-5", url: "/monitoria/monitoria-5" },
        { codigo: 2, label: "monitoria-6", url: "/monitoria/monitoria-6" },
        { codigo: 2, label: "monitoria-7", url: "/monitoria/monitoria-7" },
        { codigo: 2, label: "monitoria-8", url: "/monitoria/monitoria-8" },
        { codigo: 2, label: "monitoria-9", url: "/monitoria/monitoria-9" },
        { codigo: 2, label: "monitoria-10", url: "/monitoria/monitoria-10" },
        { codigo: 2, label: "monitoria-11", url: "/monitoria/monitoria-11" },
        { codigo: 2, label: "monitoria-12", url: "/monitoria/monitoria-12" },
        { codigo: 2, label: "monitoria-13", url: "/monitoria/monitoria-13" },
        { codigo: 2, label: "monitoria-14", url: "/monitoria/monitoria-14" },
        { codigo: 2, label: "monitoria-15", url: "/monitoria/monitoria-15" },
        { codigo: 2, label: "monitoria-16", url: "/monitoria/monitoria-16" }
      ]
    },
    {
      codigo: 1, label: "Cadastro", icone: this.folder + "icone-siderbar-cadastro.svg",
      url: "/cadastro",
      subItens: [
        { codigo: 2, label: "cadastro-1", url: "/cadastro/cadastro-1" },
        { codigo: 2, label: "cadastro-2", url: "/cadastro/cadastro-2" },
        { codigo: 2, label: "cadastro-3", url: "/cadastro/cadastro-3" }
      ]
    },
    {
      codigo: 1, label: "Extração", icone: this.folder + "icone-siderbar-extracao.svg",
      url: "/extracao",
      subItens: [
        { codigo: 3, label: "extracao-1", url: "/extracao/extracao-1" },
        { codigo: 3, label: "extracao-2", url: "/extracao/extracao-2" },
        { codigo: 3, label: "extracao-3", url: "/extracao/extracao-3" }
      ]
    },
    {
      codigo: 1, label: "Relatorios", icone: this.folder + "icone-siderbar-relatorios.svg",
      url: "/relatorios",
      subItens: [
        { codigo: 3, label: "relatorios-1", url: "/relatorios/relatorios-1" },
        { codigo: 3, label: "relatorios-2", url: "/relatorios/relatorios-2" },
        { codigo: 3, label: "relatorios-3", url: "/relatorios/relatorios-3" },
      ]
    },
    {
      codigo: 1, label: "Forecast", icone: this.folder + "icone-siderbar-forecast.svg",
      url: "/forecast",
      subItens: [
        { codigo: 3, label: "forecast-1", url: "/forecast/forecast-1" },
        { codigo: 3, label: "forecast-2", url: "/forecast/forecast-2" },
        { codigo: 3, label: "forecast-3", url: "/forecast/forecast-3" },
      ]
    }
  ]

  public siderbarModel = new SiderbarModel(this.items)

```

### HTML
``` html
 <myraeasy-siderbar [siderbarModel]="siderbarModel"></myraeasy-siderbar>
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
