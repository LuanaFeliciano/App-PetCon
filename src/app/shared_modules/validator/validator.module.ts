import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatorFormComponent } from 'src/app/components/validator-form/validator-form.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ValidatorFormComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ValidatorFormComponent]
})
export class ValidatorModule { }
