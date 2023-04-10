
export class LinkOpenBoxModel {

    constructor(
        public list: ItemSelected[],
        public title: string,
        public valueButton?: any) {
    }
}

export interface ItemSelected {
    codigo: number,
    label: string
}