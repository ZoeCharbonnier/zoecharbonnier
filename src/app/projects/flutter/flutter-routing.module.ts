import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlutterComponent } from './flutter.component';

const routes: Routes = [{ path: '', component: FlutterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlutterRoutingModule {}
