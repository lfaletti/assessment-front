import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../shared/auth.guard/auth.guard';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '',
        children: [{
            path: '', component: HomeComponent
        }],
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})


export class HomeRoutingModule { }
