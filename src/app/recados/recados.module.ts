import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecadosPageRoutingModule } from './recados-routing.module';

import { RecadosPage } from './recados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecadosPageRoutingModule
  ],
  declarations: [RecadosPage]
})
export class RecadosPageModule {}
