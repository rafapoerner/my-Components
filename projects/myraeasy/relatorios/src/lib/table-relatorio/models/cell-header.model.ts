import { TipoCell } from "./grid-model";


export class CollectionCellModel {

    constructor(index: number, header?: boolean) {
        this.index = index;
        this.isHeader = header ?? true;
        this.cells = []
    }

    public index: number;
    public isHeader: boolean;
    public cells!: CellModel[]

    public addCellInCollection(param: ParametroCell) {

        let rowSpan = param.rowSpan == null ? 1 : param.rowSpan;
        let colSpan = param.colSpan == null ? 1 : param.colSpan;

        let cell = new CellModel(param.position, param.label, rowSpan, colSpan)
        if (param.subDivision == true) cell.addSubdivisao();
        if (param.relativeCellBodyIndex != null) cell.cellBodyIndex = param.relativeCellBodyIndex
        if (param.classCustom != null) cell.classCustom = param.classCustom;

        if (param.urLink != null) {
            cell.tipoTemplate = TipoCell.TemplateUrl;
            cell.urlToTemplate = param.urLink;
            cell.classUrl = param.classUrl

        } else if (param.templateHtml != null) {
            cell.isTemplateHtml = true;
            cell.tipoTemplate = TipoCell.TemplateHtml;
            cell.templateHtml = param.templateHtml;

        } else {
            cell.tipoTemplate = TipoCell.SemTemplete;
        }

        this.cells[param.position] = cell;
    }
}

export class CellModel {

    constructor(ordem: number, label: any, rowSpan?: number, colSpan?: number, classCustom?: string) {
        this.label = label;
        this.rowSpan = rowSpan;
        this.colSpan = colSpan;
        this.rounded = false;
        this.subDivision = false;
        this.ordem = ordem;
        this.isTemplateHtml = false;
        this.classCustom = classCustom;
    }

    public label: any;
    public rowSpan?: number;
    public colSpan?: number;
    public rounded?: boolean;
    public subDivision?: boolean;
    public ordem: number;
    public cellBodyIndex?: number;
    public templateHtml?: string;
    public isTemplateHtml: boolean;
    public urlToTemplate?: string;
    public tipoTemplate?: TipoCell;
    public classUrl?: string;
    public classCustom?: string


    public addSubdivisao(): CellModel {
        this.subDivision = true
        return this
    }

    public addSRounded(): CellModel {
        this.rounded = true;
        return this
    }
}

export interface ParametroCell {
    position: number,
    label: string | number | Date,
    rowSpan?: number,
    colSpan?: number,
    subDivision?: boolean;
    relativeCellBodyIndex?: number,
    templateHtml?: string,
    urLink?: string,
    classUrl?: string,
    classCustom?: string
}
