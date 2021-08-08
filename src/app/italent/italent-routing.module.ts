import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItalentComponent } from './italent.component';

const routes: Routes = [
  {
    path: '',
    component: ItalentComponent,
    children: [
      {
        path: 'projects',
        loadChildren: () =>
          import('../projects/projects.module').then((m) => m.ProjectsModule),
      },
      {
        path: 'x-factor',
        loadChildren: () =>
          import('./x-factor/x-factor.module').then((m) => m.XFactorModule),
      },
      {
        path: 'reflection',
        loadChildren: () =>
          import('./reflection/reflection.module').then(
            (m) => m.ReflectionModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItalentRoutingModule {}
