import { Component, OnInit } from '@angular/core';
import { AppState } from '../shared/app.state';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(public appState: AppState) {}

  ngOnInit(): void {
    this.appState.header$.next('Contact');
    this.appState.subheader$.next('');
  }
}
