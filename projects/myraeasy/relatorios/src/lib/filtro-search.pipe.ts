import { Pipe, PipeTransform } from '@angular/core';

import { map, Observable } from 'rxjs';
import { CellModel, CollectionCellModel } from './table-relatorio/models/cell-header.model';

@Pipe({
    name: 'filterTable'
})
export class SearchTablePipe implements PipeTransform {


    transform(value: any[], ...args: any[]): Observable<any> | any {

        const textFilter = args[0];

        if (textFilter == undefined)
            return value;

        else {
            let collections: CollectionCellModel[] = value as CollectionCellModel[]
            let collectionsResult: any[] = [];


            for (let key of collections) {

                let propriedades = key.cells.map(p => p as CellModel).map(p => {
                    let result = ""

                    try {

                        if (typeof p.label == String.name.toLowerCase()) {
                            result = p.label.toString().toLowerCase()

                        } else if (typeof p.label == Date.name.toLowerCase()) {
                            result = p.label.toLocaleDateString()

                        } else if (typeof p.label == Number.name.toLowerCase()) {
                            result = p.label.toString()
                        }

                    } catch (error) { }

                    return result

                }).filter(p => p.toLowerCase().includes(textFilter.toLowerCase()))

                if (propriedades.length < 1) continue;

                collectionsResult.push(key)
            }

            if (collectionsResult.length > 0) {
                return collectionsResult;
            }

            return value
        }
    }
}