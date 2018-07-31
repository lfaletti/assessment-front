import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Policy } from '../models/typings';


@Injectable()
export class PolicyService {
    private apiHost =  environment.API_POLICIES_URL;

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Policy[]>(this.apiHost);
    }
}
