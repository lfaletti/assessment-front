import { LayoutModule } from '../layout/layout.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertService } from '../shared/services/alert.service';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule, AuthRoutingModule, LayoutModule],
    exports: [],
    declarations: [LoginComponent, UsersComponent, RegisterComponent],
    providers: [AuthService, UserService, AlertService],
})
export class AuthModule { }
