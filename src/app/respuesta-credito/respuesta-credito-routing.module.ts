import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespuestaCreditoPage } from './respuesta-credito.page';

const routes: Routes = [
  {
    path: '',
    component: RespuestaCreditoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespuestaCreditoPageRoutingModule {}
