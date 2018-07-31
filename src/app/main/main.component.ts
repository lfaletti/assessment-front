import { Component, OnInit } from '@angular/core';
import { Client } from '../models/typings';
import { ClientService } from '../clients/services/client.service';

@Component({
    moduleId: module.id,
    templateUrl: 'main.component.html',
})

export class MainComponent implements OnInit {

    clients: Client[] = [];
    private clientService: ClientService;

    constructor(clientService: ClientService) {
        this.clientService = clientService;
    }

    ngOnInit() {
        this.loadAllClients();
    }

    loadAllClients(): any {
        this.clientService.getAll().subscribe(clients => { this.clients = clients; });
    }
}
