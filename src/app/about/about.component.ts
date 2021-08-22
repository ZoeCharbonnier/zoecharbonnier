import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppState } from '../shared/states/app.state';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(public appState: AppState) {}

  ngOnInit(): void {
    this.appState.header$.next('Zoé Charbonnier');
    this.appState.subheader$.next('Full Stack Developer');
  }
}
