import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
    private apiHost = environment.API_AUTHENTICATION_URL;

    loggedInSubject = new BehaviorSubject<boolean>(this.hasToken());

    constructor(private http: HttpClient) { }

    getLoggedInSubject(): Observable<boolean> {
        return this.loggedInSubject.asObservable();
    }

    login(username: string, password: string) {
        const body = `username=${username}&password=${password}&grant_type=password`;
        return this.http.post<any>(this.apiHost + '/oauth2/token', body).pipe(
            map(user => {
                // login successful if there's token
                if (user && user.access_token) {
                    // store user details and jwt token in local storage and keep user logged in
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.loggedInSubject.next(true);
                }
                return user;
            })
        );
    }

    logout() {
        // remove the user from local storage
        localStorage.removeItem('currentUser');
        this.loggedInSubject.next(false);
    }

    private hasToken(): boolean {
        return !!localStorage.getItem('currentUser');
    }

    isLoggedIn(): Observable<boolean> {
        return this.loggedInSubject.asObservable();
    }
}
