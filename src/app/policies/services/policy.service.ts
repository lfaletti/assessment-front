import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { _throw } from 'rxjs/observable/throw';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { PoliciesResponse } from './../../models/typings.d';

@Injectable()
export class PolicyService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<PoliciesResponse>(`${environment.API_POLICIES_URL}`).
            pipe (
                map ((response: PoliciesResponse) => response.policies),
                catchError(err => {
                    return _throw(err);
                })
            );
    }

    getByCientId(clientId: string) {
        // TODO: Update to include clientId
        return this.http.get<PoliciesResponse>(`${environment.API_POLICIES_URL}`).
            pipe (
                map ((response: PoliciesResponse) => response.policies),
                catchError(err => {
                    return _throw(err);
                })
            );
    }
}
