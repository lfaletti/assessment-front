import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationService {
    private apiHost = 'http://localhost:50660';
    public loggedInSubject = new Subject<any>();

    constructor (private http: HttpClient) { }

    login(username: string, password: string) {
        const body = `username=${username}&password=${password}&grant_type=password`;
        return this.http.post<any>(this.apiHost + '/oauth2/token', body)
            .map(user => {
                // login successful if there's token
                if (user && user.access_token) {
                    // store user details and jwt token in local storage and keep user logged in
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.loggedInSubject.next(true);
                }
                return user;
            });
    }

    logout () {
        // remove the user from local storage
        localStorage.removeItem('currentUser');
        this.loggedInSubject.next(false);
    }

    isLoggedIn() {
        return this.http.get<HttpResponse<any>>(this.apiHost + '/api/auth/ping')
        .map(response => {
            if (response) {
                this.loggedInSubject.next(true);
                return true;
            }
            this.loggedInSubject.next(false);
            return false;
        });
    }
}
