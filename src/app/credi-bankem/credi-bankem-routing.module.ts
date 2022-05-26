import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrediBankemPage } from './credi-bankem.page';

const routes: Routes = [
  {
    path: '',
    component: CrediBankemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrediBankemPageRoutingModule {}
