import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MyraEasyFormsModule } from 'projects/myraeasy/forms/src/lib/forms.module';
import { MyraEasyMenuModule } from 'projects/myraeasy/menu/src/lib/menu.module';
import { ChartsModule } from 'projects/myraeasy/charts/src/lib/charts.module';
// import { AccordionModule } from '@myraeasy/accordions';
// import { ChartsModule } from '@myraeasy/charts';
// import { MyraEasyFormsModule } from '@myraeasy/forms';
// import { MyraEasyMenuModule } from '@myraeasy/menu';
// import { MyraeasyRelatoriosModule } from '@myraeasy/relatorios';



/********  ATENÇÃO !!!!! *******

 1 - Para que imports  @myraeasy/  funcionen deve rodar npm run  build-all
 2 - Não refernciar no import arquivos da public-api.ts dos projetos.
 3 - Componentes devem ter prefixo sempre iniciado por <myraeasy-meucomponente></myraeasy-meucomponente>
 3 - padrao de importacao
     > libs do angular no topo
     >> libs instaladas
     >>> libs criadas pelos devs

 ***************************/



@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MyraEasyFormsModule,
        MyraEasyMenuModule,
        NoopAnimationsModule,
        
        NgbAccordionModule,
    ]
})
export class AppModule { }


