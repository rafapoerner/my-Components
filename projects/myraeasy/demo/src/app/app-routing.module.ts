import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: AppComponent },
  {
    path: "cadastro", component: AppComponent,
    children: [
      { path: "cadastro-1", component: AppComponent },
      { path: "cadastro-2", component: AppComponent },
      { path: "cadastro-3", component: AppComponent }
    ]
  },
  {
    path: "monitoria", component: AppComponent,
    children: [
      { path: "monitoria-1", component: AppComponent },
      { path: "monitoria-2", component: AppComponent },
      { path: "monitoria-3", component: AppComponent },
      { path: "monitoria-4", component: AppComponent },
      { path: "monitoria-5", component: AppComponent },
      { path: "monitoria-6", component: AppComponent },
      { path: "monitoria-7", component: AppComponent },
      { path: "monitoria-8", component: AppComponent },
      { path: "monitoria-9", component: AppComponent },
      { path: "monitoria-10", component: AppComponent },
      { path: "monitoria-11", component: AppComponent },
      { path: "monitoria-12", component: AppComponent },
      { path: "monitoria-13", component: AppComponent },
      { path: "monitoria-14", component: AppComponent },
      { path: "monitoria-15", component: AppComponent },
      { path: "monitoria-16", component: AppComponent },
    ]
  },
  {
    path: "forecast", component: AppComponent,
    children: [
      { path: "forecast-1", component: AppComponent },
      { path: "forecast-2", component: AppComponent },
      { path: "forecast-3", component: AppComponent },
    ]
  },
  {
    path: "relatorios", component: AppComponent,
    children: [
      { path: "relatorios-1", component: AppComponent },
      { path: "relatorios-2", component: AppComponent },
      { path: "relatorios-3", component: AppComponent },
    ]
  },
  {
    path: "extracao", component: AppComponent,
    children: [
      { path: "extracao-1", component: AppComponent },
      { path: "extracao-2", component: AppComponent },
      { path: "extracao-3", component: AppComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
