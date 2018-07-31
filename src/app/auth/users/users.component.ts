import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
    moduleId: module.id,
    templateUrl: 'users.component.html'
})

export class UsersComponent implements OnInit {

    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    loadAllUsers(): any {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers(); });
    }
}
