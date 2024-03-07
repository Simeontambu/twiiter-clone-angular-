import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from '../model/tweet.model';
import { TweetService } from '../service/tweet.service';

@Component({
  selector: 'app-tweet-action',
  standalone: true,
  imports: [],
  templateUrl: './tweet-action.component.html',
  styleUrl: './tweet-action.component.css'
})
export class TweetActionComponent implements OnInit {
  @Input() tweets!: Tweet
  tweet!: string
  constructor(private tweetService: TweetService) { }
  ngOnInit(): void {

  }
  incrementLike(): void {
    if (this.tweets.likes > 0) {
      this.tweets.likes--
    } else {
      this.tweets.likes++
    }
  }
}

