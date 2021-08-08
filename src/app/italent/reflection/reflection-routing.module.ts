import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReflectionComponent } from './reflection.component';

const routes: Routes = [{ path: '', component: ReflectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReflectionRoutingModule {}
