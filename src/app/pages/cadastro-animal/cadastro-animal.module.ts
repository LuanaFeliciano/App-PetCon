import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroAnimalPageRoutingModule } from './cadastro-animal-routing.module';

import { CadastroAnimalPage } from './cadastro-animal.page';
import { ValidatorModule } from 'src/app/shared_modules/validator/validator.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroAnimalPageRoutingModule,
    ReactiveFormsModule,
    ValidatorModule
  ],
  declarations: [CadastroAnimalPage]
})
export class CadastroAnimalPageModule {}
