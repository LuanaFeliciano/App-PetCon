import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarPageRoutingModule } from './solicitar-routing.module';

import { SolicitarPage } from './solicitar.page';
import { ValidatorModule } from 'src/app/shared_modules/validator/validator.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitarPageRoutingModule,
    ReactiveFormsModule,
    ValidatorModule
  ],
  declarations: [SolicitarPage]
})
export class SolicitarPageModule {}
