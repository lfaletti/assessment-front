import { Component, OnInit } from '@angular/core';
import { Policy } from '../models/typings';
import { PolicyService } from './services/policy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'policies.component.html',
    styleUrls: ['policies.component.css']
})

export class PoliciesComponent implements OnInit {
    policies: Policy[] = [];


    constructor(private route: ActivatedRoute, private policyServie: PolicyService) { }

    ngOnInit() {
       this.policies = this.route.snapshot.data['policies'] || {} as Policy[];
    }
}
