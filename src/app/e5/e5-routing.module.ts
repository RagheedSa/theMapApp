import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E5Page } from './e5.page';

const routes: Routes = [
  {
    path: '',
    component: E5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E5PageRoutingModule {}
