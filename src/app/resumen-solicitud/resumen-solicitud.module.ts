import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumenSolicitudPageRoutingModule } from './resumen-solicitud-routing.module';

import { ResumenSolicitudPage } from './resumen-solicitud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumenSolicitudPageRoutingModule
  ],
  declarations: [ResumenSolicitudPage]
})
export class ResumenSolicitudPageModule {}
