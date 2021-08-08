import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XFactorRoutingModule } from './x-factor-routing.module';
import { XFactorComponent } from './x-factor.component';

@NgModule({
  declarations: [
    XFactorComponent
  ],
  imports: [CommonModule, XFactorRoutingModule],
})
export class XFactorModule {}
