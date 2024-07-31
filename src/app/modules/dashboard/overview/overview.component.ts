import { Component } from '@angular/core';
import { SideNavbarComponent } from '../../../shared/components/side-navbar/side-navbar.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [SideNavbarComponent, NavbarComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {}
