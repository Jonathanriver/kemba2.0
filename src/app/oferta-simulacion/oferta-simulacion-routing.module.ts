import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertaSimulacionPage } from './oferta-simulacion.page';

const routes: Routes = [
  {
    path: '',
    component: OfertaSimulacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertaSimulacionPageRoutingModule {}
