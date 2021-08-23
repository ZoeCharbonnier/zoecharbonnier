import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
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
    private fb: FormBuilder,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.appState.header$.next('Contact');
    this.appState.subheader$.next('');
  }

  onSubmit() {
    let config = new MatSnackBarConfig();
    config.duration = 2000;
    config.panelClass = ['bg-yellow-300', 'text-black'];
    config.announcementMessage = 'In progress';
    this.snackbar.open('In progress', null, config);
  }
}
