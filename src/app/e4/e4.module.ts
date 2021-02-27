import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E4PageRoutingModule } from './e4-routing.module';

import { E4Page } from './e4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E4PageRoutingModule
  ],
  declarations: [E4Page]
})
export class E4PageModule {}
