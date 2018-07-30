import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  private authenticated: boolean;
  private authenticationService: AuthenticationService;

  constructor(_authenticationService: AuthenticationService) {
    this.authenticationService = _authenticationService;
  }

  ngOnInit() {
        this.authenticationService.loggedInSubject.subscribe(value => this.authenticated = value);
  }

  logout() {
    this.authenticationService.logout();
  }
}

