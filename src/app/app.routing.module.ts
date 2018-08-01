import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'clients', loadChildren: './clients/clients.module#ClientsModule'},
    { path: 'policies', loadChildren: './policies/policies.module#PoliciesModule'},
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},

    // otherwise redirect to home
    { path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
