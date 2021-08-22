import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/shared/states/app.state';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss'],
})
export class WebsiteComponent implements OnInit {
  constructor(public appState: AppState) {}

  ngOnInit(): void {
    this.appState.header$.next('Website');
    this.appState.subheader$.next('');
  }
}
