import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanPagoPageRoutingModule } from './plan-pago-routing.module';

import { PlanPagoPage } from './plan-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanPagoPageRoutingModule
  ],
  declarations: [PlanPagoPage]
})
export class PlanPagoPageModule {}
