import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChartModel } from '../models/charts.models';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // getDataAccomplished() {
  //   return [160, 150, 120, 110, 600, 230, 150, 130, 140,
  //     180, 140, 170, 120, 180, 110, 150, 145, 130, 190,
  //     140, 170, 120, 180, 110, 150, 145, 130, 190, 140, 170, 120]
  // }

  // getDataGoal() {
  //   return [190, 120, 0, 130, 480,]
  // }



  // private data: ChartModel = new ChartModel(
  //   'Planejado', [160, 150, 120, 110, 600, 230, 150, 130, 140], [],
  // )


  // chartService(): Observable<ChartModel>{
  //   return of(this.data)
  // }








   /**
   *getUsers(): Observable<User[]> {
    return this.http.get(myApiUrl)
                    .map(res=>res.json())
                    .catch(err=> Observable.throw(err.message));
 }
   */


  // getCharts(){
  //   return this.http.get<any>(environment.chart);
  // }



}



