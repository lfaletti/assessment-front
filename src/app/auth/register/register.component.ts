import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {  UserService } from '../services/user.service';
import { AlertService } from '../../shared/services/alert.service';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.model.confirmPassword = this.model.password;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/auth']);
                },
                error => {
                    this.alertService.error('An error has occurred when trying to register your account. Please, try again later.');
                    this.loading = false;
                });
    }
}
