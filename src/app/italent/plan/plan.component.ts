import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/shared/app.state';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {
  constructor(public appState: AppState) {}

  ngOnInit(): void {
    this.appState.header$.next('Plan');
    this.appState.subheader$.next('');
  }
}
