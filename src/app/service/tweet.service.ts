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
            reacts: 13,
            likes: 0,
            retweets: 2,
            img: "./../../assets/images/logo-rond-twitter.svg"
        },
        {
            id: 2,
            name: "CNN",
            userName: "@CNN",
            tweetContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae earum saepe tenetur labore laboriosam accusamus esse quisquam error deserunt unde harum amet illo, itaque impedit voluptatum possimus cum sit.",
            timeAgo: new Date(),
            reacts: 43,
            likes: 0,
            retweets: 32,
            img: "./../../assets/images/logoNewYorkTime.svg",
            imageTweet: "./../../assets/images/tweet-image1.png"
        }, {
            id: 3,
            name: "Simeon",
            userName: "@siemon",
            tweetContent: "hello literally everyone",
            timeAgo: new Date(),
            reacts: 103,
            likes: 0,
            retweets: 24,
            img: "./../../assets/images/logo-rond-twitter.svg"
        },
        {
            id: 4,
            name: "NewyorkTime",
            userName: "@tambu",
            tweetContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae earum saepe tenetur labore laboriosam accusamus esse quisquam error deserunt unde harum amet illo, itaque impedit voluptatum possimus cum sit.",
            timeAgo: new Date(),
            reacts: 343,
            likes: 0,
            retweets: 122,
            img: "./../../assets/images/logoNewYorkTime.svg"
        }
    ]
}