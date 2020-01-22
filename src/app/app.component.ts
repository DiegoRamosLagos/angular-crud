import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud';
  constructor(private loadigBar: SlimLoadingBarService, private router: Router) {
    this.router.events.subscribe((event: Event)=> {
      this.navigationInterceptor(event);
    });
  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadigBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.loadigBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this.loadigBar.stop();
    }
    if (event instanceof NavigationError) {
      this.loadigBar.stop();
    }
  }
}
