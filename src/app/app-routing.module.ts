import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'about',
        loadChildren: () =>
          import('./about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'experience',
        loadChildren: () =>
          import('./experience/experience.module').then(
            (m) => m.ExperienceModule
          ),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./projects/projects.module').then((m) => m.ProjectsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
