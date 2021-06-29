import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AprovaMelhoriasPageRoutingModule } from './aprova-melhorias-routing.module';

import { AprovaMelhoriasPage } from './aprova-melhorias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AprovaMelhoriasPageRoutingModule
  ],
  declarations: [AprovaMelhoriasPage]
})
export class AprovaMelhoriasPageModule {}
