import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastraMelhoriasPageRoutingModule } from './cadastra-melhorias-routing.module';

import { CadastraMelhoriasPage } from './cadastra-melhorias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastraMelhoriasPageRoutingModule
  ],
  declarations: [CadastraMelhoriasPage]
})
export class CadastraMelhoriasPageModule {}
