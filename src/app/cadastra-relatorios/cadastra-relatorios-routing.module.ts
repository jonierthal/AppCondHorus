import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastraRelatoriosPage } from './cadastra-relatorios.page';

const routes: Routes = [
  {
    path: '',
    component: CadastraRelatoriosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastraRelatoriosPageRoutingModule {}
