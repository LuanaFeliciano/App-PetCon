import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultasAgendadasPageRoutingModule } from './consultas-agendadas-routing.module';

import { ConsultasAgendadasPage } from './consultas-agendadas.page';
import { ConsultasComponent } from 'src/app/components/consultas/consultas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultasAgendadasPageRoutingModule
  ],
  declarations: [ConsultasAgendadasPage, ConsultasComponent]
})
export class ConsultasAgendadasPageModule {}
