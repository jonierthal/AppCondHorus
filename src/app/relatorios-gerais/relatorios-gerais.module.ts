import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelatoriosGeraisPageRoutingModule } from './relatorios-gerais-routing.module';

import { RelatoriosGeraisPage } from './relatorios-gerais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelatoriosGeraisPageRoutingModule
  ],
  declarations: [RelatoriosGeraisPage]
})
export class RelatoriosGeraisPageModule {}
