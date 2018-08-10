import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { catchError, tap } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

    constructor(private _alertService: AlertService, private _router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.access_token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.access_token}`
                }
            });
        }

        // Error handling
        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => { },
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401) {
                            this._alertService.error('You are unauthorized to access this section of the application.', true);
                            this._router.navigate(['home']);
                        }
                    }
                    console.log(event);
                }),
            catchError(err => {
                console.log(err);
                return _throw(err);
            })
        );
    }
}
