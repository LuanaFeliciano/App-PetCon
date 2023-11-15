import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimeiroAcessoPageRoutingModule } from './primeiro-acesso-routing.module';

import { PrimeiroAcessoPage } from './primeiro-acesso.page';
import { ValidatorModule } from 'src/app/shared_modules/validator/validator.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimeiroAcessoPageRoutingModule,
    ReactiveFormsModule,
    ValidatorModule
  ],
  declarations: [PrimeiroAcessoPage]
})
export class PrimeiroAcessoPageModule {}
