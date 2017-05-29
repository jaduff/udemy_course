import { Component } from '@angular/core';
import { TwitterService } from './twitter.service';
import { LikesComponent } from './likes.component';

@Component ({
    selector: 'twitter',
    template: `<div class="tweetComponent">
                    <h1>Twitter</h1>
                    <div class="media" *ngFor="let tweet of tweets">
                        <div class="media-left">
                            <a href="#">
                            <img class="media-object" [src]="tweet.imageUrl" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                        <h4 class="media-heading">{{ tweet.userName }} <span class="handle">{{ tweet.handle }}</span></h4>
                            <p>{{ tweet.tweetText }}</p>
                            <likes [tweet]="tweet"></likes>
                        </div>
                </div>
            </div>
    `,
    styles: [`.handle {color: #777;}`,
            `.tweetComponent {margin: 2em;}`,
            `img {border-radius: 15px}`]
})
export class TwitterComponent {
    tweets;
    constructor(twitterService: TwitterService){
        this.tweets = twitterService.tweetList;
    }

}