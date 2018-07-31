import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Client, ClientsResponse } from '../../models/typings';

@Injectable()
export class ClientService {
    private apiUrl = environment.API_CLIENTS_URL;

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Client[]>(this.apiUrl).
            pipe (
                map ((response: ClientsResponse) => response.clients)
            );
    }

    getClientById(id: number): Observable<Client> {
        return this.http.get<Client>(this.apiUrl + '/' + id).
            pipe(
                map((response: Client) => response),
                catchError(err => {
                    return _throw(err);
                }));
    }
}
