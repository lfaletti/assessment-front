import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
    {
        path: '',
        children: [{
            path: '', component: LoginComponent
        },
        { path: 'register', component: RegisterComponent },
        {
            path: 'users', component: UsersComponent
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class AuthRoutingModule { }
