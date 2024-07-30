import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { AddProductComponent } from './modules/product/add-product/add-product.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: SignupComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
];
