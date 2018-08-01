import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { AuthGuard } from './auth.guard/auth.guard';
import { AlertService } from './services/alert.service';

@NgModule({
    imports: [CommonModule],
    exports: [AlertComponent],
    declarations: [AlertComponent],
    providers: [AlertService, AuthGuard],
})
export class SharedModule { }
