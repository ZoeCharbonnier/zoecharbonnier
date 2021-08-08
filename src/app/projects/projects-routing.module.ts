import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./project-list/project-list.module').then(
            (m) => m.ProjectListModule
          ),
      },
      {
        path: 'flutter',
        loadChildren: () =>
          import('./flutter/flutter.module').then((m) => m.FlutterModule),
      },
      {
        path: 'salesforce',
        loadChildren: () =>
          import('./salesforce/salesforce.module').then(
            (m) => m.SalesforceModule
          ),
      },
      {
        path: 'website',
        loadChildren: () =>
          import('./website/website.module').then((m) => m.WebsiteModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
