import { EventEmitter } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Guid } from "../guid-utilis";
import { CollectionCellModel } from "./cell-header.model";

export class GridModel {

    public caption?: string
    public isCaption?: boolean = false;
    public divColumn?: boolean = false;
    public rounded: boolean;
    public showOptions: boolean;
    public codigo$!: Observable<string>;
    public tipoCell?: TipoCell;
    public maxContainerHight: number;;

    private tHead: CollectionCellModel[] = [];
    private tBody: CollectionCellModel[] = [];

    private subjectHead = new BehaviorSubject<CollectionCellModel[]>(this.tHead);
    private subject = new BehaviorSubject<CollectionCellModel[]>(this.tBody);

    private collectionsHeader$: Observable<CollectionCellModel[]> = this.subjectHead.asObservable();
    private collectionsBody$: Observable<CollectionCellModel[]> = this.subject.asObservable();

    public onExportTable: EventEmitter<boolean> = new EventEmitter<boolean>();
    public onFilterText: EventEmitter<string> = new EventEmitter<string>();

    constructor(rounded: boolean, maxheigth: number, showOptions: boolean = false, caption: string = "", divColmn: boolean = false) {

        this.rounded = rounded;
        this.caption = caption
        this.isCaption = caption.length > 0;
        this.divColumn = divColmn;
        this.collectionsBody$! = this.subject.asObservable();
        this.showOptions = showOptions
        if (showOptions == true) this.rounded = false;
        this.maxContainerHight = maxheigth;

        this.codigo$ = new Observable<string>(sub => {
            sub.next(Guid.newGuid());
            sub.unsubscribe();
        })
    }


    get getRowsBody(): Observable<CollectionCellModel[]> {
        return this.collectionsBody$
    }
    get getRowsHeader(): Observable<CollectionCellModel[]> {
        return this.collectionsHeader$
    }


    public cleanBody() {
        this.tBody = [];
        this.subject.next([])
    }
    public cleanHeader() {
        this.tHead = [];
        this.subjectHead.next([])
    }

    public addRowHeader(collection: CollectionCellModel) {
        if (collection.index == 0 && this.rounded == true) {
            collection.cells[0].addSRounded();
            collection.cells[collection.cells.length - 1].addSRounded();
        }
        this.tHead[collection.index] = collection;
    }

    public addColletionBody(index: number, collection: CollectionCellModel) {
        this.tBody[index] = collection;
    }


    public buildHeaderAsync() {
        this.subjectHead.next(this.tHead)
    }

    public buildBodyAsync() {
        this.subject.next(this.tBody)
    }
}

export enum TipoCell {
    TemplateHtml = 1,
    TemplateUrl = 2,
    SemTemplete = 3
}







