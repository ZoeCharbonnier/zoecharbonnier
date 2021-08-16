import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from 'src/app/shared/app.state';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  constructor(public appState: AppState, private router: Router) {
    console.log(
      '*** ProjectListComponent - constructor',
      this.appState.header$.value
    );
  }

  ngOnInit(): void {
    this.appState.header$.next('Projects');
    this.appState.subheader$.next('');
  }

  navigateTo(path: string): void {
    this.router.navigateByUrl(`/projects/${path}`);
  }
}
