import { environment } from './../environments/environment';
import { Client } from './../models/client';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientService {
    private apiUrl = environment.HOST_URL + 'api/insurance/';

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Client[]>(this.apiUrl + 'clients');
    }
}
