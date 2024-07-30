import { Injectable, inject } from '@angular/core';
import { User } from '../../models/user/user';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpClient = inject(HttpClient);
  constructor() {}

  getUserById(id: number) {
    return this.httpClient.get<User>('http://localhost:3000/users/' + id);
  }

  getUsers() {
    return this.httpClient.get<User[]>('http://localhost:3000/users');
  }

  getUserByEmail(email: string) {
    return this.httpClient.get<User[]>(
      'http://localhost:3000/users?email=' + email
    );
  }

  addUser(user: User) {
    return this.httpClient.post<User>('http://localhost:3000/users/', user);
  }

  authenticate(email: string, password: string): Observable<boolean> {
    return this.getUserByEmail(email).pipe(
      map((users) => {
        if (users.length === 0) {
          return false; // User not found
        }
        const user = users[0];
        return user.password === password; // Check if password matches
      }),
      catchError((error) => {
        console.error('Authentication error', error);
        return of(false); // Return false in case of error
      })
    );
  }
}
