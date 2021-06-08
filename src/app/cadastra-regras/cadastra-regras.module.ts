import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastraRegrasPageRoutingModule } from './cadastra-regras-routing.module';

import { CadastraRegrasPage } from './cadastra-regras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastraRegrasPageRoutingModule
  ],
  declarations: [CadastraRegrasPage]
})
export class CadastraRegrasPageModule {}
