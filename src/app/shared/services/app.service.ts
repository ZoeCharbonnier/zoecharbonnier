import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  navigateToLinkedIn(): void {
    window.open('https://www.linkedin.com/in/zoe-charbonnier');
  }

  navigateToFacebook(): void {
    window.open('https://www.facebook.com/zoe.charbonnier.75');
  }

  navigateToGithub(): void {
    window.open('https://github.com/ZoeCharbonnier');
  }
}
