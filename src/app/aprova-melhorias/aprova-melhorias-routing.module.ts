import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AprovaMelhoriasPage } from './aprova-melhorias.page';

const routes: Routes = [
  {
    path: '',
    component: AprovaMelhoriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AprovaMelhoriasPageRoutingModule {}
