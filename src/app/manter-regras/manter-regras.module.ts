import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManterRegrasPageRoutingModule } from './manter-regras-routing.module';

import { ManterRegrasPage } from './manter-regras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManterRegrasPageRoutingModule
  ],
  declarations: [ManterRegrasPage]
})
export class ManterRegrasPageModule {}
