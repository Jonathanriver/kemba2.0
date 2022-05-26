import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespuestaCreditoPageRoutingModule } from './respuesta-credito-routing.module';

import { RespuestaCreditoPage } from './respuesta-credito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespuestaCreditoPageRoutingModule
  ],
  declarations: [RespuestaCreditoPage]
})
export class RespuestaCreditoPageModule {}
