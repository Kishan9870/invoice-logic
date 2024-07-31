import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { AddProductComponent } from './modules/product/add-product/add-product.component';
import { OverviewComponent } from './modules/dashboard/overview/overview.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: 'overview',
    component: OverviewComponent,
  },
];
