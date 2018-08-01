import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliciesComponent } from './../policies/policies.component';
import { PoliciesResolve } from './../policies/policies.resolve';
import { ClientsComponent } from './clients.component';
import { ClientsResolve } from './clients.resolve';

const routes: Routes = [
    {
        path: '',
        children: [{
            path: '', component: ClientsComponent, resolve: { clients: ClientsResolve }
        },
        {
            path: ':clientId/policies', component: PoliciesComponent, resolve: { policies: PoliciesResolve }
        }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [ClientsResolve]
})


export class ClientsRoutingModule { }
