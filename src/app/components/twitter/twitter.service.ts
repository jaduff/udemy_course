import { Input } from '@angular/core';
import { Tweet } from './tweet';

export class TwitterService {
    @Input() tweetList;

    constructor() {
        this.tweetList = new Array;
        this.tweetList.push(TwitterService.addTweet(0, "@pony", "I am a pony", "Bob Simpson"));
        this.tweetList.push(TwitterService.addTweet(1, "@dog", "I am a dog", "Jack Sparrow"));
        this.tweetList.push(TwitterService.addTweet(2, "@cat", "I am a cat", "Alan Spencer"));
    }

    static addTweet(imageIndex: number, handle: string, tweetText:string, userName: string):Tweet {
        var tweet = new Tweet;
        tweet.imageUrl = "http://lorempixel.com/100/100/people/?" + String(imageIndex);
        tweet.handle = handle;
        tweet.tweetText = tweetText;
        tweet.userName = userName;
        tweet.likes = Math.floor(Math.random() * 10);
        return tweet;
    }
    
}