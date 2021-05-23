import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MelhoriasPageRoutingModule } from './melhorias-routing.module';

import { MelhoriasPage } from './melhorias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MelhoriasPageRoutingModule
  ],
  declarations: [MelhoriasPage]
})
export class MelhoriasPageModule {}
