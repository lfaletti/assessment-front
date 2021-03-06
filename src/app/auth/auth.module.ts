import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../shared/services/alert.service';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './services/user.service';

@NgModule({
    imports: [CommonModule, FormsModule, AuthRoutingModule],
    exports: [],
    declarations: [LoginComponent, RegisterComponent],
    providers: [UserService],
})
export class AuthModule { }
