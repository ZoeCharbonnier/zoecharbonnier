import { Component, OnInit } from '@angular/core';
import { AppState } from '../shared/app.state';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  firstname: string = '';
  name: string = '';
  phone: string = '';
  email: string = '';
  message: string = '';

  constructor(public appState: AppState) {}

  ngOnInit(): void {
    this.appState.header$.next('Contact');
    this.appState.subheader$.next('');
  }
}
