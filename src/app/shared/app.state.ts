import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  header$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Zoé Charbonnier'
  );
  subheader$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Full stack developer'
  );
}
