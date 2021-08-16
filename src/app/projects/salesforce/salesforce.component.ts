import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/shared/app.state';

@Component({
  selector: 'app-salesforce',
  templateUrl: './salesforce.component.html',
  styleUrls: ['./salesforce.component.scss'],
})
export class SalesforceComponent implements OnInit {
  constructor(public appState: AppState) {}

  ngOnInit(): void {
    this.appState.header$.next('Salesforce');
    this.appState.subheader$.next('');
  }
}
