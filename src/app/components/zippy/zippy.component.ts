import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component ({
    selector: 'zippy',
    template: `<div class='panel panel-default'>
                <div class="panel-heading" (click)="toggle()">{{ title }}<i class="fa" [ngClass]='{"fa-chevron-up": !isExpanded, "fa-chevron-down": isExpanded}'></i></div>
                <div class="panel-body" *ngIf="isExpanded"><ng-content></ng-content></div>
                </div>
                `,
    styles: [`.panel-default {margin-bottom: 0px;}`,
                `.panel-heading {cursor: pointer}`,
                `.panel-heading i {float: right;}`]
})
export class zippyComponent {
    @Input() title;
    isExpanded = false;

    toggle(){
        this.isExpanded = !this.isExpanded;

    }
}