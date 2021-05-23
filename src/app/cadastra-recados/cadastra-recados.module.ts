import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastraRecadosPageRoutingModule } from './cadastra-recados-routing.module';

import { CadastraRecadosPage } from './cadastra-recados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastraRecadosPageRoutingModule
  ],
  declarations: [CadastraRecadosPage]
})
export class CadastraRecadosPageModule {}
