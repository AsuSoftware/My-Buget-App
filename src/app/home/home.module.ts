import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AddProductPage } from './components/add-product/add-product.page';
import { AddBugetPage } from './components/add-buget/add-buget.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, AddProductPage, AddBugetPage],
  entryComponents: [AddBugetPage, AddProductPage]
})
export class HomePageModule { }
