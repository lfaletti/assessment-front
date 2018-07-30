import { PoliciesComponent } from './policies/policies.component';
import { UsersComponent } from './users/users.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from '../app/auth.guard/auth.guard';
import { MainComponent } from './main/main.component';
import { ClientsComponent } from './clients/clients.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'policies', component: PoliciesComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
