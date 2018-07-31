import { Component, OnInit } from '@angular/core';
import { Client } from '../models/typings';
import { ClientService } from './services/client.service';

@Component({
    templateUrl: 'clients.component.html',
    styleUrls: ['clients.component.scss']
})
export class ClientsComponent implements OnInit {

     clients: Client[] = [];
     selectedId: string;

    constructor (private clientService: ClientService) { }
    ngOnInit(): void {
        this.clientService.getAll().subscribe(c => {
            this.clients = c;
        });
    }

    isSelected(client: Client) {
        return client.id === this.selectedId;
    }

    selectRow(id: string) {
        this.selectedId = id;
    }
}
