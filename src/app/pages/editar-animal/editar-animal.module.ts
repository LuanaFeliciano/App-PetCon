import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarAnimalPageRoutingModule } from './editar-animal-routing.module';

import { EditarAnimalPage } from './editar-animal.page';
import { ValidatorModule } from 'src/app/shared_modules/validator/validator.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarAnimalPageRoutingModule,
    ReactiveFormsModule,
    ValidatorModule
  ],
  declarations: [EditarAnimalPage]
})
export class EditarAnimalPageModule {}
