import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusAnimaisPage } from './meus-animais.page';

const routes: Routes = [
  {
    path: '',
    component: MeusAnimaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusAnimaisPageRoutingModule {}
