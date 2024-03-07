import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetActionComponent } from '../tweet-action/tweet-action.component';
import { TweetService } from '../service/tweet.service';
import { Tweet } from '../model/tweet.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tweets',
  standalone: true,
  imports: [CommonModule, TweetActionComponent],
  templateUrl: './tweets.component.html',
  styleUrl: './tweets.component.css'
})
export class TweetsComponent implements OnInit {
  tweet: Tweet[] = []
  apiUrl = 'http://localhost:8000/tweets'; 

  constructor(private tweetService: TweetService, private http:HttpClient) {

  }
  ngOnInit(): void {
    this.tweet = this.tweetService.tweet
    this.getTweets()
  }
  getTweets() {
    this.http.get<Tweet[]>(this.apiUrl)
      .subscribe(tweets => {
        console.log(tweets)
        // this.tweet = tweets;
      });
  }

}
