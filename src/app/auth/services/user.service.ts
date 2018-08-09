import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../../models/user';

@Injectable()
export class UserService {

    private apiHost = environment.API_AUTHENTICATION_URL;

    constructor(private http: HttpClient) { }


    getAll() {
        return this.http.get<User[]>(this.apiHost + 'api/auth/users');
    }

    getById(id: number) {
        return this.http.get(this.apiHost + 'api/auth/users/' + id);
    }

    create(user: User) {
        return this.http.post(
            this.apiHost + '/api/auth/register', user);
    }

    update(user: User) {
        return this.http.put(this.apiHost + 'api/auth/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(this.apiHost + 'api/auth/users/' + id);
    }
}
