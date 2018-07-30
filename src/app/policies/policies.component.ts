import { Component, OnInit } from '@angular/core';
import { PolicyService } from './../services/policy.service';
import { Policy } from '../models/policy';

@Component({
    selector: 'app-policies',
    moduleId: module.id,
    templateUrl: 'policies.component.html'
})

export class PoliciesComponent implements OnInit {
    private policies: Policy[] = [];

    constructor(private policyService: PolicyService) { }

    ngOnInit() {
        this.loadAllPolicies();
    }

    loadAllPolicies(): any {
        this.policyService.getAll().subscribe(policies => { this.policies  = policies; });
    }
}

