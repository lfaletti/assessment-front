import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators';
import { Client } from '../models/typings';
import { AlertService } from '../shared/services/alert.service';
import { ClientService } from './services/client.service';
import { map } from 'rxjs/operator/map';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ClientsResolve implements Resolve<Observable<Client>> {

    constructor(private alertService: AlertService, private clientService: ClientService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.clientService.getAll().pipe(
            catchError(err => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status !== 401) {
                        this.alertService.error('An error has occurred. Please, try again later.');
                    }
                }
                    return _throw(err);
                }));
    }
}
