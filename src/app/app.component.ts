import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SideNavbarComponent } from './shared/components/side-navbar/side-navbar.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    SideNavbarComponent,
    NavbarComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  hideSidebarAndNavbar: boolean = false;
  noPadding: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.router.url;
        this.hideSidebarAndNavbar =
          currentRoute === '/login' || currentRoute === '/signup';
        this.noPadding =
          currentRoute === '/login' || currentRoute === '/signup';
      });
  }
}
