import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastraMelhoriasPage } from './cadastra-melhorias.page';

const routes: Routes = [
  {
    path: '',
    component: CadastraMelhoriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastraMelhoriasPageRoutingModule {}
