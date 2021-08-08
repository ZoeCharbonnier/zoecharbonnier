import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesforceRoutingModule } from './salesforce-routing.module';
import { SalesforceComponent } from './salesforce.component';


@NgModule({
  declarations: [
    SalesforceComponent
  ],
  imports: [
    CommonModule,
    SalesforceRoutingModule
  ]
})
export class SalesforceModule { }
