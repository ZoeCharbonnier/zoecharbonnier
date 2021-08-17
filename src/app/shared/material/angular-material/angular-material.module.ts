import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule],
  exports: [MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule],
})
export class AngularMaterialModule {}
