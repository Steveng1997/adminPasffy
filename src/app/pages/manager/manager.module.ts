import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ManagerPageRoutingModule } from './manager-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { ManagerPage } from './manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagerPageRoutingModule,
    NgxPaginationModule,
  ],
  declarations: [ManagerPage]
})
export class ManagerPageModule {}
