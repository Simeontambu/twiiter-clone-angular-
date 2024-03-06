import { Injectable } from "@angular/core";
import { Tweet } from "../model/tweet.model";
@Injectable({
    providedIn: 'root'
})
export class TweetService {
    tweet: Tweet[] = [
        {
            id: 1,
            name: "Twitter",
            userName: "@Twitter",
            tweetContent: "hello literally everyone",
            timeAgo: new Date(),
        },
        {
            id: 2,
            name: "CNN",
            userName: "@CNN",
            tweetContent: "hello literally everyone",
            timeAgo: new Date(),
        },{
            id: 1,
            name: "Simeon",
            userName: "@siemon",
            tweetContent: "hello literally everyone",
            timeAgo: new Date(),
        },
        {
            id: 4,
            name: "Tambu",
            userName: "@tambu",
            tweetContent: "hello literally everyone",
            timeAgo: new Date(),
        }
    ]
}