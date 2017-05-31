import { Component } from '@angular/core';

@Component ({
    selector: 'subscribe-form',
    templateUrl: './subscribeform.component.html',
    styleUrls: ['./subscribeform.component.css']
})
export class subscribeFormComponent {
    name: string;
    email: string;
    frequency: string;
}