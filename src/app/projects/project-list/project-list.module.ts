import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectListRoutingModule } from './project-list-routing.module';
import { ProjectListComponent } from './project-list.component';
import { AngularMaterialModule } from 'src/app/shared/material/angular-material/angular-material.module';

@NgModule({
  declarations: [ProjectListComponent],
  imports: [CommonModule, ProjectListRoutingModule, AngularMaterialModule],
})
export class ProjectListModule {}
