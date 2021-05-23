import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastraRecadosPage } from './cadastra-recados.page';

const routes: Routes = [
  {
    path: '',
    component: CadastraRecadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastraRecadosPageRoutingModule {}
