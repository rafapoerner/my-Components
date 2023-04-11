import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, Subject, of } from 'rxjs';

// import { ItemMultiSelectModel, ItemSelected, LinkOpenBoxModel, ListMultiSelectModel } from '@myraeasy/forms';
// import { ChartModel, SerieChartModel } from '@myraeasy/charts';
// import { AccordionModel } from '@myraeasy/accordions';
// import { ItemSiderBar, NavbarModel, SiderbarModel } from '@myraeasy/menu';
import { GridModel } from 'projects/myraeasy/relatorios/src/lib/table-relatorio/models/grid-model';
import { CollectionCellModel } from 'projects/myraeasy/relatorios/src/lib/table-relatorio/models/cell-header.model';
import { AccordionModel } from 'projects/myraeasy/accordions/src/lib/accordions/accordion/models/accordion.models';
import { NavbarModel } from 'projects/myraeasy/menu/src/lib/navbar/model/navbal-model';
import { ItemSiderBar, SiderbarModel } from 'projects/myraeasy/menu/src/lib/siderbar/models/siderbar-model';

import { ItemSelected, LinkOpenBoxModel } from 'projects/myraeasy/forms/src/lib/link-open-box/models/link-openbox.model';
import { ChartModel, SerieChartModel } from 'projects/myraeasy/charts/src/lib/chart/models/charts.models';
import { ListMultiSelectModel } from 'projects/myraeasy/forms/src/lib/multi-select/models/multi-select.model';
import { ItemMultiSelectModel } from 'dist/myraeasy/forms/lib/multi-select/models/multi-select.model';

// import { GridModel, CollectionCellModel } from '@myraeasy/relatorios';
// import { ItemMultiSelectModel, ListMultiSelectModel } from 'projects/myraeasy/multi-select/src/public-api';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'forecast';

  public gridModelTeste!: GridModel;
  public gridModelNexidiaOptions!: GridModel;
  public gridModelTwo!: GridModel;
  public gridModelThree!: GridModel;
  public loading = true;

  private meses = ['Mar/22', 'Abr/22', 'Mai/22', 'Jun/22', 'Jul/22', 'Ago/22', 'Set/22', 'Out/22', 'Nov/22', 'Dez/22', 'Jan/23', 'Fev/23', 'Mar/23'];

  constructor() {

  }

  //#region Grid Table


  private gerarGridTeste() {
    this.gridModelTeste = new GridModel(true, 300)
    this.gridModelTeste.cleanHeader();
    this.gridModelTeste.cleanBody();

    this.meses = ['Mar/24', 'Abr/24', 'Mai/24', 'Jun/24', 'Jul/22', 'Ago/22', 'Set/22', 'Out/22', 'Nov/22', 'Dez/22', 'Jan/23', 'Fev/23', 'Mar/23'];
    let arrayHeader = ["instancia", "Session"];

    this.meses.forEach(element => {
      arrayHeader.push(element);
    });

    arrayHeader.push("session");

    let headerOne = new CollectionCellModel(0, true);

    for (let index = 0; index < arrayHeader.length; index++) {
      const element = arrayHeader[index];
      headerOne.addCellInCollection({ position: index, relativeCellBodyIndex: index, label: element, subDivision: false });
    }
    this.gridModelTeste.addRowHeader(headerOne);
    this.gridModelTeste.buildHeaderAsync();


    setTimeout(() => {

      let arrayHeader = ["instancia", "Session", ...this.meses, "Session"];
      let headerOne = new CollectionCellModel(0, true);

      arrayHeader.forEach((cel, i) => {
        if (i == 3) {
          headerOne.addCellInCollection({ position: i, label: cel, relativeCellBodyIndex: i, urLink: "/teste", classUrl: "logo" })

        } else {
          headerOne.addCellInCollection({ position: i, relativeCellBodyIndex: i, label: cel })
        }
      });

      this.gridModelTeste.addRowHeader(headerOne);
      this.gridModelTeste.buildHeaderAsync();

    }, 5000)
  }

  private gerarGridTableTwo(bordas: boolean) {

    this.gridModelTwo = new GridModel(bordas, 400);

    // header
    let headerOne = new CollectionCellModel(0, true);
    headerOne.addCellInCollection({ position: 0, relativeCellBodyIndex: 0, label: "clientes", classCustom: "text-center" });
    headerOne.addCellInCollection({ position: 1, relativeCellBodyIndex: 1, label: "instancia" });
    headerOne.addCellInCollection({ position: 2, relativeCellBodyIndex: 2, label: "Ativo" });

    let headerTwo = new CollectionCellModel(1, true);
    headerTwo.addCellInCollection({ position: 0, relativeCellBodyIndex: 0, label: "clientes diferentes" });
    headerTwo.addCellInCollection({ position: 1, relativeCellBodyIndex: 1, label: "instancia diferentes" });
    headerTwo.addCellInCollection({ position: 2, relativeCellBodyIndex: 2, label: "Ativo diferentes" });

    this.gridModelTwo.addRowHeader(headerOne);
    this.gridModelTwo.addRowHeader(headerTwo);

    this.gridModelTwo.buildHeaderAsync();


    // body
    let collectionBody1 = new CollectionCellModel(0, false);
    collectionBody1.addCellInCollection({ position: 0, label: "Vivo" });
    collectionBody1.addCellInCollection({ position: 1, label: "Nuvem 1" });
    collectionBody1.addCellInCollection({ position: 2, label: "ATIVO" });


    let collectionBody2 = new CollectionCellModel(1, false);
    collectionBody2.addCellInCollection({ position: 0, label: "Vivo 3" });
    collectionBody2.addCellInCollection({ position: 1, label: "Nuvem 2" });
    collectionBody2.addCellInCollection({ position: 2, label: "DESATIVADO" });


    let collectionBody3 = new CollectionCellModel(2, false);
    collectionBody3.addCellInCollection({ position: 0, label: "OI" });
    collectionBody3.addCellInCollection({ position: 1, label: "Nuvem 3" });
    collectionBody3.addCellInCollection({ position: 2, label: "Ativo" });

    let collectionBody4 = new CollectionCellModel(3, false);
    collectionBody4.addCellInCollection({ position: 0, label: "SKY" });
    collectionBody4.addCellInCollection({ position: 1, label: "Nuvem 2" });
    collectionBody4.addCellInCollection({ position: 2, label: "DESATIVADO" });


    this.gridModelTwo.addColletionBody(0, collectionBody1)
    this.gridModelTwo.addColletionBody(1, collectionBody2)
    this.gridModelTwo.addColletionBody(2, collectionBody3)
    this.gridModelTwo.addColletionBody(3, collectionBody4)
    this.gridModelTwo.addColletionBody(4, collectionBody1)
    this.gridModelTwo.addColletionBody(5, collectionBody2)
    this.gridModelTwo.addColletionBody(6, collectionBody3)
    this.gridModelTwo.addColletionBody(7, collectionBody4)

    this.gridModelTwo.buildBodyAsync();
  }

  private gerargridModelNexidiaOptions(bordas: boolean) {


    this.gridModelNexidiaOptions = new GridModel(false, 900, true)

    let collection1 = new CollectionCellModel(0, true)
    collection1.addCellInCollection({ position: 0, relativeCellBodyIndex: 0, label: "Data Ingestão", rowSpan: 2, colSpan: 1 })
    collection1.addCellInCollection({ position: 1, relativeCellBodyIndex: 1, label: "Instância", rowSpan: 2, colSpan: 1 })
    collection1.addCellInCollection({ position: 2, relativeCellBodyIndex: 2, label: "Ssssion", rowSpan: 2, colSpan: 1 })
    collection1.addCellInCollection({ position: 3, relativeCellBodyIndex: 3, label: "Total", rowSpan: 2, colSpan: 1 })
    collection1.addCellInCollection({ position: 4, label: "Descoberto", rowSpan: 1, colSpan: 2, classCustom: "ms-3" })
    collection1.addCellInCollection({ position: 5, label: "Com Transcrição", rowSpan: 1, colSpan: 2, classCustom: "ms-2" })
    collection1.addCellInCollection({ position: 6, label: "Sem Transcrição", rowSpan: 1, colSpan: 2, classCustom: "ms-2" })
    collection1.addCellInCollection({ position: 7, label: "Hora de Implantação", rowSpan: 1, colSpan: 2, classCustom: "ms-2" })
    collection1.addCellInCollection({ position: 8, label: "Data de Contato", rowSpan: 1, colSpan: 2, classCustom: "ms-5" })

    let collection2 = new CollectionCellModel(1, true)
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

    this.gridModelNexidiaOptions.addRowHeader(collection1)
    this.gridModelNexidiaOptions.addRowHeader(collection2)
    this.gridModelNexidiaOptions.buildHeaderAsync();

    let collectionBody1 = new CollectionCellModel(0)
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

    let collectionBody2 = new CollectionCellModel(1)
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

    let collectionBody3 = new CollectionCellModel(2)
    collectionBody3.addCellInCollection({ position: 0, label: new Date(2023, 2, 21) })
    collectionBody3.addCellInCollection({ position: 1, label: "Nuvem 2" })
    collectionBody3.addCellInCollection({ position: 2, label: "Vivo 2" })
    collectionBody3.addCellInCollection({ position: 3, label: 100 })
    collectionBody3.addCellInCollection({ position: 4, label: 150 })
    collectionBody3.addCellInCollection({ position: 5, label: 100 })
    collectionBody3.addCellInCollection({ position: 6, label: 100 })
    collectionBody3.addCellInCollection({ position: 7, label: 400 })
    collectionBody3.addCellInCollection({ position: 8, label: 5 })
    collectionBody3.addCellInCollection({ position: 9, label: 277 })
    collectionBody3.addCellInCollection({ position: 10, label: "15:25:52" })
    collectionBody3.addCellInCollection({ position: 11, label: "15:28:52" })
    collectionBody3.addCellInCollection({ position: 12, label: new Date().toLocaleDateString() })
    collectionBody3.addCellInCollection({ position: 13, label: new Date().toLocaleDateString() })

    let collectionBody4 = new CollectionCellModel(3)
    collectionBody4.addCellInCollection({ position: 0, label: new Date(2020, 2, 21) })
    collectionBody4.addCellInCollection({ position: 1, label: "Nuvem 1" })
    collectionBody4.addCellInCollection({ position: 2, label: "Sky XX" })
    collectionBody4.addCellInCollection({ position: 3, label: 500 })
    collectionBody4.addCellInCollection({ position: 4, label: 150 })
    collectionBody4.addCellInCollection({ position: 5, label: 125 })
    collectionBody4.addCellInCollection({ position: 6, label: 100 })
    collectionBody4.addCellInCollection({ position: 7, label: 400 })
    collectionBody4.addCellInCollection({ position: 8, label: 327 })
    collectionBody4.addCellInCollection({ position: 9, label: 9000 })
    collectionBody4.addCellInCollection({ position: 10, label: "15:25:59" })
    collectionBody4.addCellInCollection({ position: 11, label: "15:28:52" })
    collectionBody4.addCellInCollection({ position: 12, label: new Date().toLocaleDateString() })
    collectionBody4.addCellInCollection({ position: 13, label: new Date().toLocaleDateString() })

    this.gridModelNexidiaOptions.addColletionBody(0, collectionBody1)
    this.gridModelNexidiaOptions.addColletionBody(1, collectionBody2)
    this.gridModelNexidiaOptions.addColletionBody(2, collectionBody3)
    this.gridModelNexidiaOptions.addColletionBody(3, collectionBody4)

    for (let index = 4; index < 30; index++) {

      this.gridModelNexidiaOptions.addColletionBody(index, collectionBody4)
    }

    setTimeout(() => {
      this.gridModelNexidiaOptions.buildBodyAsync();
    }, 50);

  }

  private gerarGridTableThree(bordas: boolean) {

    this.gridModelThree = new GridModel(true, 300)

    let collection1 = new CollectionCellModel(0, true)
    collection1.addCellInCollection({ position: 0, relativeCellBodyIndex: 0, label: "Data Ingestão", rowSpan: 2, colSpan: 1 })
    collection1.addCellInCollection({ position: 1, relativeCellBodyIndex: 1, label: "Instância", rowSpan: 2, colSpan: 1 })
    collection1.addCellInCollection({ position: 2, relativeCellBodyIndex: 2, label: "Ssssion", rowSpan: 2, colSpan: 1 })
    collection1.addCellInCollection({ position: 3, relativeCellBodyIndex: 3, label: "Total", rowSpan: 2, colSpan: 1 })
    collection1.addCellInCollection({ position: 4, label: "Descoberto", rowSpan: 1, colSpan: 2 })
    collection1.addCellInCollection({ position: 5, label: "Com Transcrição", rowSpan: 1, colSpan: 2 })
    collection1.addCellInCollection({ position: 6, label: "Sem Transcrição", rowSpan: 1, colSpan: 2 })
    collection1.addCellInCollection({ position: 7, label: "Hora de Implantação", rowSpan: 1, colSpan: 2 })
    collection1.addCellInCollection({ position: 8, label: "Data de Contato", rowSpan: 1, colSpan: 2 })

    let collection2 = new CollectionCellModel(1, true)
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

    this.gridModelThree.addRowHeader(collection1)
    this.gridModelThree.addRowHeader(collection2)

    this.gridModelThree.buildHeaderAsync();


    let collectionBody1 = new CollectionCellModel(0)
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

    let collectionBody2 = new CollectionCellModel(1)
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

    let collectionBody3 = new CollectionCellModel(2)
    collectionBody3.addCellInCollection({ position: 0, label: new Date(2023, 2, 21) })
    collectionBody3.addCellInCollection({ position: 1, label: "Nuvem 2" })
    collectionBody3.addCellInCollection({ position: 2, label: "Vivo 2" })
    collectionBody3.addCellInCollection({ position: 3, label: 100 })
    collectionBody3.addCellInCollection({ position: 4, label: 150 })
    collectionBody3.addCellInCollection({ position: 5, label: 100 })
    collectionBody3.addCellInCollection({ position: 6, label: 100 })
    collectionBody3.addCellInCollection({ position: 7, label: 400 })
    collectionBody3.addCellInCollection({ position: 8, label: 5 })
    collectionBody3.addCellInCollection({ position: 9, label: 277 })
    collectionBody3.addCellInCollection({ position: 10, label: "15:25:52" })
    collectionBody3.addCellInCollection({ position: 11, label: "15:28:52" })
    collectionBody3.addCellInCollection({ position: 12, label: new Date().toLocaleDateString() })
    collectionBody3.addCellInCollection({ position: 13, label: new Date().toLocaleDateString() })

    let collectionBody4 = new CollectionCellModel(3)
    collectionBody4.addCellInCollection({ position: 0, label: new Date(2020, 2, 21) })
    collectionBody4.addCellInCollection({ position: 1, label: "Nuvem 1" })
    collectionBody4.addCellInCollection({ position: 2, label: "Sky XX" })
    collectionBody4.addCellInCollection({ position: 3, label: 500 })
    collectionBody4.addCellInCollection({ position: 4, label: 150 })
    collectionBody4.addCellInCollection({ position: 5, label: 125 })
    collectionBody4.addCellInCollection({ position: 6, label: 100 })
    collectionBody4.addCellInCollection({ position: 7, label: 400 })
    collectionBody4.addCellInCollection({ position: 8, label: 327 })
    collectionBody4.addCellInCollection({ position: 9, label: 9000 })
    collectionBody4.addCellInCollection({ position: 10, label: "15:25:59" })
    collectionBody4.addCellInCollection({ position: 11, label: "15:28:52" })
    collectionBody4.addCellInCollection({ position: 12, label: new Date().toLocaleDateString() })
    collectionBody4.addCellInCollection({ position: 13, label: new Date().toLocaleDateString() })

    this.gridModelThree.addColletionBody(0, collectionBody1)
    this.gridModelThree.addColletionBody(1, collectionBody2)
    this.gridModelThree.addColletionBody(2, collectionBody3)
    this.gridModelThree.addColletionBody(3, collectionBody4)


    this.gridModelThree.buildBodyAsync();


  }

  public exportarExcel() {
    this.gridModelTwo.onExportTable.emit(true)
  }

  public filterText({ target }: Event) {

    this.gridModelTwo.onFilterText.emit((target as HTMLInputElement).value)
  }

  //#endregion Grid Table

  @Input() accordions!: AccordionModel

  public version: string = environment.version;
  public inputVersion: string = environment.inputVersion


  //#region navbar

  public navbar: NavbarModel = new NavbarModel("/assets/logos/logo-myra-home.svg")

  public navigationNavbar(event: string) {
    console.log(event)
  }

  //#endregion  navbar


  //#region  Siderbar


  private folder: string = "/assets/icones/siderbar/"

  private items: ItemSiderBar[] = [
    {
      codigo: 1, label: "Home", icone: this.folder + "icone-siderbar-home.svg",
      url: "/home",
      subItens: []
    },
    {
      codigo: 1, label: "Monitoria", icone: this.folder + "icone-siderbar-monitoria.svg",
      url: "/monitoria",
      subItens: [
        { codigo: 2, label: "monitoria-1", url: "/monitoria/monitoria-1" },
        { codigo: 2, label: "monitoria-2", url: "/monitoria/monitoria-2" },
        { codigo: 2, label: "monitoria-3", url: "/monitoria/monitoria-3" },
        { codigo: 2, label: "monitoria-4", url: "/monitoria/monitoria-4" },
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
  //#endregion Siderbar

  //#region  Charts
  chart = ['Q', 'S', 'S', 'D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D', 'S', 'T', 'Q', 'S', 'S', 'D']
  xAxisPrimaryLabel = ['Q', 'S', 'S', 'D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D', 'S', 'T', 'Q', 'S', 'S', 'D']
  xAxisSecondaryLabel = ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19']
  xAxisThirdMonthLabel = ['Nov', '', '', '', '', '', '', '', '', '', '', '', 'Out', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']

  xAxisSeries1 = new SerieChartModel([160, 150, 120, 110, 600, 230, 150, 130, 140, 180, 140, 170, 120, 180, 110, 150, 145, 130, 190, 140, 170, 120, 180, 110, 150, 145, 130, 190, 140, 170, 120], 'Planejado', '#d9d9d9', 0, '')
  xAxisSeries2 = new SerieChartModel([190, 120, 0, 130, 480,], 'Realizado', '#fdb933', 0, '')

  seriesColumn: SerieChartModel[] = [this.xAxisSeries1, this.xAxisSeries2]

  chartItemsOptions!: Observable<ChartModel>



  // accordion: AccordionModel = new AccordionModel("16.000", "1.000", "10", "20 21 22 23 24 25 26 27 28 29 30 31", "1 2 3 4 5 6 7 8 9",
  // "10 11 12 13 14 15 16 17 18 19", "Out", "Nov", this.dataService, this.dataService);


  private charts() {
    this.navbar.iconProfilePath = "/assets/logos/logo-myra-b.svg"
    this.chartItemsOptions = new Observable<ChartModel>(sub => sub.next(new ChartModel('', this.seriesColumn, this.xAxisPrimaryLabel, this.xAxisSecondaryLabel, this.xAxisThirdMonthLabel)))
  }

  //#endregion Charts

  //#region Link-Visao

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

  //#endregion Link-Visao


  // //#region Multi-Select

  listSelect = new Subject<any>()
  listMulti = this.listSelect.asObservable()

  // //#endregion Multi-Select


  ngOnInit(): void {
    this.navbar.iconProfilePath = "/assets/logos/logo-myra-b.svg"

    this.chartItemsOptions = new Observable<ChartModel>(sub => sub.next(new ChartModel('', this.seriesColumn, this.xAxisPrimaryLabel, this.xAxisSecondaryLabel, this.xAxisThirdMonthLabel)))

    this.gerarGridTeste();
    this.gerargridModelNexidiaOptions(true);
    this.gerarGridTableTwo(false)
    this.gerarGridTableThree(false)

    const data: ListMultiSelectModel[] = [];

   setTimeout(() => {
    let listMultiSelectA: ItemMultiSelectModel[] = [
      { value: 1, label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit1", selected: true },
      { value: 2, label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit2", selected: false },
      { value: 3, label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit3", selected: true },
    ]

    let listMultiSelectB: ItemMultiSelectModel[] = [
      { value: 4, label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit4", selected: false },
      { value: 5, label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit5", selected: true },
      { value: 6, label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit1", selected: false },
    ]

    let listMultiSelectC: ItemMultiSelectModel[] = [
      { value: 7, label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit3", selected: false },
      { value: 8, label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit6", selected: false },
      { value: 9, label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit3", selected: true },
    ]

    let listMultiSelectD: ItemMultiSelectModel[] = [
      { value: 10, label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit9.", selected: true },
      { value: 11, label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit5.", selected: false },
      { value: 12, label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit8.", selected: false },
    ]

    let listMultiSelectE: ItemMultiSelectModel[] = [
      { value: 10, label: "Lorem ipsum dolor sit amet, consectetur adipiscing eli10.", selected: true },
    ]


    let listMultiSelect1 = new ListMultiSelectModel(listMultiSelectA, 'Legumes')
    let listMultiSelect2 = new ListMultiSelectModel(listMultiSelectB, 'Frutas')
    let listMultiSelect3 = new ListMultiSelectModel(listMultiSelectC, 'Salada de Frutas')
    let listMultiSelect4 = new ListMultiSelectModel(listMultiSelectD, 'Verduras')
    let listMultiSelect5 = new ListMultiSelectModel(listMultiSelectE, '')


    let multiList = [listMultiSelect1,  listMultiSelect2, listMultiSelect3, listMultiSelect4, listMultiSelect5]

    this.listSelect.next(multiList)

    // console.log('Lista SetTimeOut', multiList)
   }, 4000);

    this.charts();

  }
}
