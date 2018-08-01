import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Policy } from '../models/typings';
import { PolicyService } from './services/policy.service';

@Injectable()
export class PoliciesResolve implements Resolve<Observable<Policy>> {

    constructor(private policyService: PolicyService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (route.params['clientId']) {
            return this.policyService.getByCientId(route.params['clientId']);
        }
    }
}
