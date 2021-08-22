import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AppService } from '../shared/services/app.service';
import { AppState } from '../shared/states/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  header = 'Zoé Charbonnier';
  subheader = 'Full Stack Developer';

  constructor(
    public appState: AppState,
    public appService: AppService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.appState.header$.subscribe((header: string) => {
      this.header = header;
      this.cd.detectChanges();
    });

    this.appState.subheader$.subscribe((subheader: string) => {
      this.subheader = subheader;
      this.cd.detectChanges();
    });
  }
}
