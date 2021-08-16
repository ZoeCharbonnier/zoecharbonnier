import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/shared/app.state';

@Component({
  selector: 'app-flutter',
  templateUrl: './flutter.component.html',
  styleUrls: ['./flutter.component.scss'],
})
export class FlutterComponent implements OnInit {
  constructor(public appState: AppState) {}

  ngOnInit(): void {
    this.appState.header$.next('Flutter');
    this.appState.subheader$.next('');
  }
}
