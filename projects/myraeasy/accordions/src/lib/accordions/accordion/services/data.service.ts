import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getDataAccomplished() {
    return [160, 150, 120, 110, 600, 230, 150, 130, 140,
      180, 140, 170, 120, 180, 110, 150, 145, 130, 190,
      140, 170, 120, 180, 110, 150, 145, 130, 190, 140, 170, 120]
  }

  getDataGoal() {
    return [190, 120, 0, 130, 480,]
  }

  // getCharts(){
  //   return this.http.get<any>(environment.chart);
  // }


}



