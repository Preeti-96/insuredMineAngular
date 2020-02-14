import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = new Subject<boolean>();

  constructor(private router: Router) {
  }

  logIn(username: string) {
    this.setSession(username);
  }

  logOut() {
    this.removeSession();
    this.router.navigate(['home']);
  }

  getUserId() {
    return localStorage.getItem('user-name');
  }

  private setSession(username: string) {
    localStorage.setItem('user-name', username);
  }

  private removeSession() {
    localStorage.removeItem('user-name');
  }
}

