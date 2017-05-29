import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component ({
    selector: 'zippy',
    template: `<div class='panel panel-default'>
                <div class="panel-heading" (click)="onClick()">{{ title }}<i class="fa" [ngClass]='{"fa-chevron-up": !isExpanded, "fa-chevron-down": isExpanded}'></i></div>
                <div class="panel-body" [class.expanded]="isExpanded" [class.contracted]="!isExpanded"><ng-content></ng-content></div>
                </div>
                `,
    styles: [`.panel-default {margin-bottom: 0px;}`,
                `.panel-body.expanded { display: block;}`,
                `.panel-body.contracted { display: none;}`,
                `.panel-heading {cursor: pointer}`,
                `.panel-heading i {float: right;}`]
})
export class zippyComponent {
    @Input() title;
    isExpanded = false;

    onClick(){
        this.isExpanded = !this.isExpanded;

    }
}