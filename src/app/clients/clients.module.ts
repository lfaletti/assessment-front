import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoliciesModule } from '../policies/policies.module';
import { AppInterceptor } from '../shared/helpers/app.interceptors';
import { ClientsComponent } from './clients.component';
import { ClientsResolve } from './clients.resolve';
import { ClientsRoutingModule } from './clients.routing.module';
import { ClientService } from './services/client.service';

@NgModule({
    imports: [CommonModule, ClientsRoutingModule, PoliciesModule, HttpClientModule, FormsModule],
    exports: [],
    declarations: [ClientsComponent],
    providers: [    ClientService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AppInterceptor,
          multi: true
        },
        ClientsResolve]
})
export class ClientsModule { }
