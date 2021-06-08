import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastraRegrasPage } from './cadastra-regras.page';

const routes: Routes = [
  {
    path: '',
    component: CadastraRegrasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastraRegrasPageRoutingModule {}
