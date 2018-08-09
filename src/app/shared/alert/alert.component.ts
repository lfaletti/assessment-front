import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';

@Component({
    selector: 'app-alert',
    templateUrl: 'alert.component.html',
    providers: []
})

export class AlertComponent implements OnInit {

    message: string;
    messageType: string;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.message = '';
        this.alertService.getMessage().subscribe(notification => {
            if (notification) {
            this.message = notification.text;
            this.messageType = notification.type;
            } else {
                this.message = '';
            }
        } );
    }
}

