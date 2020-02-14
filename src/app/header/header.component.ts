import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authentication: boolean = false;
  username: string;


  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(authenticate => {
      this.authentication = authenticate;
      if (this.authentication) {
        this.username = this.authService.getUserId();
      }
    });

  }

  onLogOut() {
    this.authService.isAuthenticated.next(false);
    this.authService.logOut();
  }


}
