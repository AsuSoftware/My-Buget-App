import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBugetPage } from './add-buget.page';

const routes: Routes = [
  {
    path: '',
    component: AddBugetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBugetPageRoutingModule {}
