import { PoliciesResolve } from './policies.resolve';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliciesComponent } from './policies.component';

const routes: Routes = [
  { path: '',
  children: [{
      path: ':username', component: PoliciesComponent, resolve: { policies: PoliciesResolve }
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PoliciesResolve]
})
export class PoliciesRoutingModule { }

export const routedComponents = [PoliciesComponent];
