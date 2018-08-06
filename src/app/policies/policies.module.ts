import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppInterceptor } from '../shared/helpers/app.interceptors';
import { PoliciesComponent } from './policies.component';
import { PoliciesResolve } from './policies.resolve';
import { PoliciesRoutingModule } from './policies.routing.module';
import { PolicyService } from './services/policy.service';

@NgModule({
    imports: [CommonModule, PoliciesRoutingModule, HttpClientModule, FormsModule],
    exports: [],
    declarations: [PoliciesComponent],
    providers: [PolicyService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AppInterceptor,
          multi: true
        },
        PoliciesResolve]
})
export class PoliciesModule { }
