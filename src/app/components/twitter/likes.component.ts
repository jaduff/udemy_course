import { Component } from '@angular/core';
import { Tweet } from './tweet';
import { Input } from '@angular/core';


@Component ({
    selector: "likes",
    template: `<span><i class="fa fa-heart" [class.ilike]="tweet.ilike" style="padding-right: 0.2em; cursor: pointer" (click)="like($event)"></i>{{ tweet.likes }}</span>`,
    styles: [`.ilike {color: deeppink;}`]
})
export class LikesComponent {
    @Input() tweet: Tweet;

    like($event) {
        if (this.tweet.ilike == false)
        {
            this.tweet.ilike = true;
            this.tweet.likes++;
        }else{
            this.tweet.ilike = false;
            this.tweet.likes--;
        }
    }
}