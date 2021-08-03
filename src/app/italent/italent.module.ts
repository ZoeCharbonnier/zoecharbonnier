import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItalentRoutingModule } from './italent-routing.module';
import { ItalentComponent } from './italent.component';


@NgModule({
  declarations: [
    ItalentComponent
  ],
  imports: [
    CommonModule,
    ItalentRoutingModule
  ]
})
export class ItalentModule { }
