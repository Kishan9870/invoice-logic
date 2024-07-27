import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { User } from '../../../core/models/user/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  authService = inject(AuthService);
  router = inject(Router);
  toastrService = inject(ToastrService);

  user: User = {
    email: '',
    password: '',
    mobileNumber: '',
  };

  constructor() {}

  addUser() {
    this.authService.addUser(this.user).subscribe((result) => {
      this.toastrService.success('Sign up success.');
      this.router.navigateByUrl('/');
    });
  }
}
