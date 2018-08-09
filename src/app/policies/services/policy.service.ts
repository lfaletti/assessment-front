import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { _throw } from 'rxjs/observable/throw';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Policy } from '../../models/typings';

@Injectable()
export class PolicyService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Policy[]>(`${environment.API_POLICIES_URL}`).
            pipe (
                map ((response: Policy[]) => response),
                catchError(err => {
                    return _throw(err);
                })
            );
    }

    getByUsername(userName: string) {
        // TODO: Update to include clientId
        return this.http.get<Policy[]>(`${environment.API_POLICIES_URL}/` + userName).
            pipe (
                map ((response: Policy[]) => response),
                catchError(err => {
                    return _throw(err);
                })
            );
    }
}
