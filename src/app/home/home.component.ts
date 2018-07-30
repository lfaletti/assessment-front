import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    private authenticated: boolean;

    constructor(private _authService: AuthenticationService) { }

    ngOnInit() {
        this._authService.isLoggedIn().subscribe(value => this.authenticated = value) ;
        this._authService.loggedInSubject.subscribe(value => this.authenticated = value);
    }
}
