import { AuthGuard } from './auth.guard/auth.guard';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './services/alert.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [AlertComponent],
    declarations: [AlertComponent],
    providers: [AlertService, AuthGuard],
})
export class SharedModule { }
