import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  private authenticated: boolean;
  private authenticationService: AuthService;

  constructor(_authenticationService: AuthService) {
    this.authenticationService = _authenticationService;
  }

  ngOnInit() {
        this.authenticationService.loggedInSubject.subscribe(value => this.authenticated = value);
  }

  logout() {
    this.authenticationService.logout();
  }
}

