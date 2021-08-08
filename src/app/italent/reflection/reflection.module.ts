import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReflectionRoutingModule } from './reflection-routing.module';
import { ReflectionComponent } from './reflection.component';


@NgModule({
  declarations: [
    ReflectionComponent
  ],
  imports: [
    CommonModule,
    ReflectionRoutingModule
  ]
})
export class ReflectionModule { }
