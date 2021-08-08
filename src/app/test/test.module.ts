import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { AngularMaterialModule } from '../shared/material/angular-material/angular-material.module';

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, TestRoutingModule, AngularMaterialModule],
})
export class TestModule {}
