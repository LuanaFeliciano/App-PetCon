import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoConsultaPageRoutingModule } from './historico-consulta-routing.module';

import { HistoricoConsultaPage } from './historico-consulta.page';
import { HistoricoCardComponent } from 'src/app/components/historico-card/historico-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoConsultaPageRoutingModule
  ],
  declarations: [HistoricoConsultaPage, HistoricoCardComponent]
})
export class HistoricoConsultaPageModule {}
