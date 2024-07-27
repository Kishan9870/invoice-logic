import { Injectable, inject } from '@angular/core';
import { User } from '../../models/user/user';
import { HttpClient } from '@angular/common/http';

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
}
