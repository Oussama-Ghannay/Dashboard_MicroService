import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Music';
  shouldDisplayHeader: boolean = true; // Determine when to hide/show header
  shouldDisplayFooter: boolean = true; // Determine when to hide/show footer

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        // Hide header and footer for specific routes
        this.shouldDisplayHeader = !(this.router.url.includes('/login') || this.router.url.includes('/register'));
        this.shouldDisplayFooter = !(this.router.url.includes('/login') || this.router.url.includes('/register'));
      }
    });
  }
}
