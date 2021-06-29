import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManterRelatoriosPageRoutingModule } from './manter-relatorios-routing.module';

import { ManterRelatoriosPage } from './manter-relatorios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManterRelatoriosPageRoutingModule
  ],
  declarations: [ManterRelatoriosPage]
})
export class ManterRelatoriosPageModule {}
