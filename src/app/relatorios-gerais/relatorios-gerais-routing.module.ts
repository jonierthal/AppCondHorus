import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelatoriosGeraisPage } from './relatorios-gerais.page';

const routes: Routes = [
  {
    path: '',
    component: RelatoriosGeraisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelatoriosGeraisPageRoutingModule {}
