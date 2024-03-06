export class Tweet {
    constructor(public id: number,
        public name: string,
        public userName: string,
        public timeAgo: Date,
        public tweetContent: string,
        public reacts: number,
        public likes: number,
        public retweets: number,public img?: string,
        public imageTweet?: string,
        ) { }
}