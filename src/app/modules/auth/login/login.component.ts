import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../../core/models/user/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  toastrService = inject(ToastrService);

  user: User = {
    email: '',
    password: '',
  };

  authenticate() {
    this.authService.getUserByEmail(this.user.email).subscribe(
      (result) => {
        if (result.length > 0) {
          const user = result[0];
          if (this.user.password === user.password) {
            this.toastrService.success('Login successful');
            this.router.navigateByUrl('/add-product');
          } else {
            this.toastrService.error('Login failed: Incorrect password');
          }
        } else {
          this.toastrService.error('Login failed: User not found');
        }
      },
      (error) => {
        console.log('Error', error);
        this.toastrService.error('Login failed: Server error');
      }
    );
  }
}
