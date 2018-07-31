import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../app/auth.guard/auth.guard';
import { ClientsComponent } from './clients/clients.component';
import { ClientsResolve } from './clients/clients.resolve';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PoliciesComponent } from './policies/policies.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'clients', component: ClientsComponent, resolve: { clients: ClientsResolve }},
    { path: 'policies', component: PoliciesComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
