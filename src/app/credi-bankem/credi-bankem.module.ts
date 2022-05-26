import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrediBankemPageRoutingModule } from './credi-bankem-routing.module';

import { CrediBankemPage } from './credi-bankem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrediBankemPageRoutingModule
  ],
  declarations: [CrediBankemPage]
})
export class CrediBankemPageModule {}
