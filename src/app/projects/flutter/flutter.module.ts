import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlutterRoutingModule } from './flutter-routing.module';
import { FlutterComponent } from './flutter.component';


@NgModule({
  declarations: [
    FlutterComponent
  ],
  imports: [
    CommonModule,
    FlutterRoutingModule
  ]
})
export class FlutterModule { }
