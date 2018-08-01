import { Component, OnInit } from '@angular/core';
import { Client } from '../models/typings';
import { ClientService } from './services/client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'clients.component.html',
    styleUrls: ['clients.component.scss']
})
export class ClientsComponent implements OnInit {

     clients: Client[] = [];
     selectedId: string;

    constructor (private route: ActivatedRoute, private clientService: ClientService) { }
    ngOnInit(): void {
        this.clients = this.route.snapshot.data['clients'] || {} as Client[];
    }

    isSelected(client: Client) {
        return client.id === this.selectedId;
    }

    selectRow(id: string) {
        this.selectedId = id;
    }
}
