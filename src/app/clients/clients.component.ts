import { OnInit, Component } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client';

@Component({
    moduleId: module.id,
    templateUrl: 'clients.component.html'
})
export class ClientsComponent implements OnInit {

     clients: Client[] = [];

    constructor (private clientService: ClientService) { }
    ngOnInit(): void {
        this.getClients();
    }

    getClients() {
        this.clientService.getAll().subscribe(c => this.clients = c);
    }
}
