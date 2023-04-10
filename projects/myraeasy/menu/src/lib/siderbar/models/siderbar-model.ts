export class SiderbarModel {

    public itensList: ItemSiderBar[];

    constructor(itensList: ItemSiderBar[]) {
        this.itensList = itensList;
    }
}



export interface ItemSiderBar {

    codigo: number,
    label: string,
    icone: string,
    url: string,
    subItens: ItemSiderBarChildren[]
}

export interface ItemSiderBarChildren {
    codigo: number,
    label: string,
    url: string,
}