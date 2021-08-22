import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from '../shared/services/app.service';
import { AppState } from '../shared/states/app.state';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form: FormGroup = this.fb.group({
    firstname: [null],
    name: [null],
    phone: [null],
    email: [null],
    message: [null],
  });

  constructor(
    public appState: AppState,
    public appService: AppService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.appState.header$.next('Contact');
    this.appState.subheader$.next('');
  }
}
