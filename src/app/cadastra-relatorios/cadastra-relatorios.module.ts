import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastraRelatoriosPageRoutingModule } from './cadastra-relatorios-routing.module';

import { CadastraRelatoriosPage } from './cadastra-relatorios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastraRelatoriosPageRoutingModule
  ],
  declarations: [CadastraRelatoriosPage]
})
export class CadastraRelatoriosPageModule {}
