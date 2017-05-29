import { Input } from '@angular/core';

export class Tweet {
    imageUrl: string;
    tweetText: string;
    userName: string;
    handle: string;
    likes: number;
    ilike: Boolean = false;
}