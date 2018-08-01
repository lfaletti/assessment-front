import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/typings';
import { ClientService } from './services/client.service';

@Injectable()
export class ClientsResolve implements Resolve<Observable<Client>> {

    constructor(private clientService: ClientService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // if (route.params['id']) {
        //     return this.clientService.getClientById(route.params['id']);
        // }
        return this.clientService.getAll();
    }
}
