import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetActionComponent } from '../tweet-action/tweet-action.component';
import { TweetService } from '../service/tweet.service';
import { Tweet } from '../model/tweet.model';


@Component({
  selector: 'app-tweets',
  standalone: true,
  imports: [CommonModule, TweetActionComponent],
  templateUrl: './tweets.component.html',
  styleUrl: './tweets.component.css'
})
export class TweetsComponent implements OnInit {
  tweet: Tweet[] = []
  constructor(private tweetService: TweetService) {

  }
  ngOnInit(): void {
    this.tweet = this.tweetService.tweet
  }

}
