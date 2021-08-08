import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: 'flutter',
        loadChildren: () =>
          import('./flutter/flutter.module').then((m) => m.FlutterModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./project-list/project-list.module').then(
            (m) => m.ProjectListModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
