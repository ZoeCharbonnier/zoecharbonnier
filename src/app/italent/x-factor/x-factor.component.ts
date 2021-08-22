import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/shared/states/app.state';

@Component({
  selector: 'app-x-factor',
  templateUrl: './x-factor.component.html',
  styleUrls: ['./x-factor.component.scss'],
})
export class XFactorComponent implements OnInit {
  constructor(public appState: AppState) {}

  ngOnInit(): void {
    this.appState.header$.next('X-Factor');
    this.appState.subheader$.next('');
  }
}
