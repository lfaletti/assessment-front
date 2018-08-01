import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JwtInterceptor } from '../shared/helpers/jwt.interceptors';
import { ClientsComponent } from './clients.component';
import { ClientsResolve } from './clients.resolve';
import { ClientsRoutingModule } from './clients.routing.module';
import { ClientService } from './services/client.service';
import { PoliciesModule } from '../policies/policies.module';

@NgModule({
    imports: [CommonModule, ClientsRoutingModule, PoliciesModule, HttpClientModule, FormsModule],
    exports: [],
    declarations: [ClientsComponent],
    providers: [    ClientService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptor,
          multi: true
        },
        ClientsResolve]
})
export class ClientsModule { }
