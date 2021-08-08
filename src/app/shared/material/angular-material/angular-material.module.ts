import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [MatCardModule, MatMenuModule, MatToolbarModule],
  exports: [MatCardModule, MatMenuModule, MatToolbarModule],
})
export class AngularMaterialModule {}
