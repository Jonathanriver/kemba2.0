import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaSolicitudesPageRoutingModule } from './lista-solicitudes-routing.module';

import { ListaSolicitudesPage } from './lista-solicitudes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaSolicitudesPageRoutingModule
  ],
  declarations: [ListaSolicitudesPage]
})
export class ListaSolicitudesPageModule {}
