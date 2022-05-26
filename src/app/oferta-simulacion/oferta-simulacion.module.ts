import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertaSimulacionPageRoutingModule } from './oferta-simulacion-routing.module';

import { OfertaSimulacionPage } from './oferta-simulacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertaSimulacionPageRoutingModule
  ],
  declarations: [OfertaSimulacionPage]
})
export class OfertaSimulacionPageModule {}
