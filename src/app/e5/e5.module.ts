import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E5PageRoutingModule } from './e5-routing.module';

import { E5Page } from './e5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E5PageRoutingModule
  ],
  declarations: [E5Page]
})
export class E5PageModule {}
