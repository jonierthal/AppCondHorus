import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecadosPage } from './recados.page';

const routes: Routes = [
  {
    path: '',
    component: RecadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecadosPageRoutingModule {}
