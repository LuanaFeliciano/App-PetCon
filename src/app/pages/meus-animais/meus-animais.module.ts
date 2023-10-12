import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusAnimaisPageRoutingModule } from './meus-animais-routing.module';

import { MeusAnimaisPage } from './meus-animais.page';
import { CardAnimalComponent } from '../../components/card-animal/card-animal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusAnimaisPageRoutingModule
  ],
  declarations: [MeusAnimaisPage, CardAnimalComponent]
})
export class MeusAnimaisPageModule {}
