import { Component, OnInit } from '@angular/core';
import { AppState } from '../shared/app.state';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  constructor(public appState: AppState) {
    console.log(
      '*** ExperienceComponent - constructor',
      this.appState.header$.value
    );
  }

  ngOnInit(): void {
    this.appState.header$.next('Experience');
    this.appState.subheader$.next('');
  }
}
