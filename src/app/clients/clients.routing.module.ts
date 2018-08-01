import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { ClientsResolve } from './clients.resolve';

const routes: Routes = [
    {
        path: '',
        children: [{
            path: '', component: ClientsComponent, resolve: { clients: ClientsResolve }
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [ClientsResolve]
})


export class ClientsRoutingModule { }
