import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBugetPageRoutingModule } from './add-buget-routing.module';

import { AddBugetPage } from './add-buget.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBugetPageRoutingModule
  ],
  declarations: [AddBugetPage]
})
export class AddBugetPageModule {}
