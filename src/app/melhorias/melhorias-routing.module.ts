import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MelhoriasPage } from './melhorias.page';

const routes: Routes = [
  {
    path: '',
    component: MelhoriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MelhoriasPageRoutingModule {}
