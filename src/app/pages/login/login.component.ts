import {Component, OnInit} from '@angular/core';
import users from './users-cred/user.json';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userList: { userid: string, password: string, username: string }[] = users;


  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onLoginButtonClicked(userId: string, password: string) {
    console.log('email ' + userId);
    console.log('password ' + password);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.userList.length; i++) {
      if (userId === this.userList[i]['userid'] && password === this.userList[i]['password']) {
        this.authService.logIn(this.userList[i]['username']);
        this.authService.isAuthenticated.next(true);
        this.router.navigate(['/home']);

      }
    }
  }


}
