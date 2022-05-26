import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumenSolicitudPage } from './resumen-solicitud.page';

const routes: Routes = [
  {
    path: '',
    component: ResumenSolicitudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumenSolicitudPageRoutingModule {}
