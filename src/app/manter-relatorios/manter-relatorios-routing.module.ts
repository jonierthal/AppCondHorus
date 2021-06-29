import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManterRelatoriosPage } from './manter-relatorios.page';

const routes: Routes = [
  {
    path: '',
    component: ManterRelatoriosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManterRelatoriosPageRoutingModule {}
