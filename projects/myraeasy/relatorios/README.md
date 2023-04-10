# Relatorios

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.



## Grid - typescript 

O componente Big Number tem duas classes, uma classe de dados e uma de configuração, instanciando através de um construtor.  

>   Classe de configuração.
   
- `isCaption`: informa se a grid vai exibir legenda.

- `isCaption`: recebe a legenda em formato string.

- `divColumn`: o informa se grid vai ter divisoes nas celulas.

- `rounded`: Informa se a grid vai ter bordas arredondadas.

- `showOptions`:  habilita dropddow de opcoes .

``` typescript

export class GridModel {

    public caption?: string
    public isCaption?: boolean = false;
    public divColumn?: boolean = false;
    public rounded: boolean;
    public showOptions: boolean;

    private tHead: CollectionCellModel[] = [];
    private tBody: CollectionCellModel[] = [];
    private subject = new BehaviorSubject<CollectionCellModel[]>([]);
    private collectionsBody$: Observable<CollectionCellModel[]> = this.subject.asObservable();
    public onExportTable: EventEmitter<boolean> = new EventEmitter<boolean>();
    public onFilterText: EventEmitter<string> = new EventEmitter<string>();

    constructor(rounded: boolean, showOptions: boolean = false, caption: string = "", divColmn: boolean = false) {

        this.rounded = rounded;
        this.caption = caption
        this.isCaption = caption.length > 0;
        this.divColumn = divColmn;
        this.collectionsBody$! = this.subject.asObservable();
        this.showOptions = showOptions
        if (showOptions == true) this.rounded = false;
    }
```

> Exemplos:

- Cria a instacia do componente.

``` typescript
 this.gridModelThree = new GridModel(bordas);
```
#### Metodos do grid para adicionar celulas 

```typescript
addCellInCollection()
```

 - parametros 
 
 ```typescript
export interface ParametroCell {
    position: number,
    label: string | number | Date,
    rowSpan?: number,
    colSpan?: number,
    subDivision?: boolean;
    relativeCellBodyIndex?: number

}
 ```

- O ` position:` posicao da linha na grid, a primeira linha da grid da grid.
- O ` relativeCellBodyIndex:` onde o evento disparado pela celula vai atuar na celula do body.
- O ` label:` dado que vai ser apresentado na celula .
- O ` rowSpan:` quantas linhas a celula vai ocupar .
- O ` colSpan:` quantas colunas a celula vai ocupar.
- O ` subDivision:` informa se coluna é filha de uma celula que ocupa duas colunas , subdivisão sempre vai ser na segunda linha em diante.


```typescript
 // header
  let collection1 = new CollectionCellModel(1, true)
    collection1.addCellInCollection({ position: 0, relativeCellBodyIndex: 0, label: "Data Ingestão", rowSpan: 2, colSpan: 1 })
    collection1.addCellInCollection({ position: 1, relativeCellBodyIndex: 1, label: "Instância", rowSpan: 2, colSpan: 1 })
    collection1.addCellInCollection({ position: 2, relativeCellBodyIndex: 2, label: "Ssssion", rowSpan: 2, colSpan: 1 })
    collection1.addCellInCollection({ position: 3, relativeCellBodyIndex: 3, label: "Total", rowSpan: 2, colSpan: 1 })
    collection1.addCellInCollection({ position: 4, label: "Descoberto", rowSpan: 1, colSpan: 2 })
    collection1.addCellInCollection({ position: 5, label: "Com Transcrição", rowSpan: 1, colSpan: 2 })
    collection1.addCellInCollection({ position: 6, label: "Sem Transcrição", rowSpan: 1, colSpan: 2 })
    collection1.addCellInCollection({ position: 7, label: "Hora de Implantação", rowSpan: 1, colSpan: 2 })
    collection1.addCellInCollection({ position: 8, label: "Data de Contato", rowSpan: 1, colSpan: 2 })
    
    // segnda linha do header 
    let collection2 = new CollectionCellModel(2, true)
    collection2.addCellInCollection({ position: 0, relativeCellBodyIndex: 4, label: "volume", subDivision: true })
    collection2.addCellInCollection({ position: 1, relativeCellBodyIndex: 5, label: "Hora", subDivision: true })
    collection2.addCellInCollection({ position: 2, relativeCellBodyIndex: 6, label: "volume", subDivision: true })
    collection2.addCellInCollection({ position: 3, relativeCellBodyIndex: 7, label: "Hora", subDivision: true })
    collection2.addCellInCollection({ position: 4, relativeCellBodyIndex: 8, label: "volume", subDivision: true })
    collection2.addCellInCollection({ position: 5, relativeCellBodyIndex: 9, label: "Hora", subDivision: true })
    collection2.addCellInCollection({ position: 6, relativeCellBodyIndex: 10, label: "Inicial", subDivision: true })
    collection2.addCellInCollection({ position: 7, relativeCellBodyIndex: 11, label: "Final", subDivision: true })
    collection2.addCellInCollection({ position: 8, relativeCellBodyIndex: 12, label: "Inicio", subDivision: true })
    collection2.addCellInCollection({ position: 9, relativeCellBodyIndex: 13, label: "Fim", subDivision: true })
```
 - As Classes `BigNumberConfig`  são classes de configuração de exibição.

```typescript
// adicionando as linhas na grid

   this.gridModelThree.addRowHeader(0, collection1)
   this.gridModelThree.addRowHeader(1, collection2)
```

#### Body da Grid



> Linhas do body.

```typescript
 // tip !! pode se usar um loop para adicionar linhas

 let collectionBody1 = new CollectionCellModel()
    collectionBody1.addCellInCollection({ position: 0, label: new Date(2004, 2, 21) })
    collectionBody1.addCellInCollection({ position: 1, label: "Nuvem 1" })
    collectionBody1.addCellInCollection({ position: 2, label: "Sky XX" })
    collectionBody1.addCellInCollection({ position: 3, label: 500 })
    collectionBody1.addCellInCollection({ position: 4, label: 150 })
    collectionBody1.addCellInCollection({ position: 5, label: 125 })
    collectionBody1.addCellInCollection({ position: 6, label: 100 })
    collectionBody1.addCellInCollection({ position: 7, label: 400 })
    collectionBody1.addCellInCollection({ position: 8, label: 327 })
    collectionBody1.addCellInCollection({ position: 9, label: 55 })
    collectionBody1.addCellInCollection({ position: 10, label: "15:25:59" })
    collectionBody1.addCellInCollection({ position: 11, label: "15:28:52" })
    collectionBody1.addCellInCollection({ position: 12, label: new Date().toLocaleDateString() })
    collectionBody1.addCellInCollection({ position: 13, label: new Date().toLocaleDateString() })

    let collectionBody2 = new CollectionCellModel()
    collectionBody2.addCellInCollection({ position: 0, label: new Date(2003, 2, 21) })
    collectionBody2.addCellInCollection({ position: 1, label: "Nuvem 1" })
    collectionBody2.addCellInCollection({ position: 2, label: "Vivo" })
    collectionBody2.addCellInCollection({ position: 3, label: 300 })
    collectionBody2.addCellInCollection({ position: 4, label: 150 })
    collectionBody2.addCellInCollection({ position: 5, label: 130 })
    collectionBody2.addCellInCollection({ position: 6, label: 158 })
    collectionBody2.addCellInCollection({ position: 7, label: 35 })
    collectionBody2.addCellInCollection({ position: 8, label: 327 })
    collectionBody2.addCellInCollection({ position: 9, label: 99 })
    collectionBody2.addCellInCollection({ position: 10, label: "15:25:59" })
    collectionBody2.addCellInCollection({ position: 11, label: "15:28:52" })
    collectionBody2.addCellInCollection({ position: 12, label: new Date().toLocaleDateString() })
    collectionBody2.addCellInCollection({ position: 13, label: new Date().toLocaleDateString() })


```
> Adiciona linhas no body do grid.

```typescript
   this.gridModelThree.addColletionBody(0, collectionBody1)
   this.gridModelThree.addColletionBody(1, collectionBody2)
```
> Gera visualização do body da Grid.

```typescript
   this.gridModelThree.buildBodyAsync();
```
#### Metodos e Eventos 
- O `cleanBody();:` posicao da linha na grid, a primeira linha da grid da grid.
- O `onExportTable` evento que dispara a ação de exporta para planilha excel.
- O `onFilterText:` evento que dispara a ação do filtro, seu parametro é a string de filtro.  

## Grid - HTML

```html
   <myraeasy-grid [gridModel]="gridModelThree" [gridBody]="gridModelThree.getRowsBody"  cli></myraeasy-grid>
```

 
