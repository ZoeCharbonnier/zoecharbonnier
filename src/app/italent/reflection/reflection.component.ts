import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/shared/states/app.state';

@Component({
  selector: 'app-reflection',
  templateUrl: './reflection.component.html',
  styleUrls: ['./reflection.component.scss'],
})
export class ReflectionComponent implements OnInit {
  constructor(public appState: AppState) {}

  ngOnInit(): void {
    this.appState.header$.next('Reflection');
    this.appState.subheader$.next('');
  }
}
