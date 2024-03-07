import { Component, OnInit } from '@angular/core';
import { TweetService } from '../service/tweet.service';
import { Tweet } from '../model/tweet.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-tweet-editor',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './tweet-editor.component.html',
  styleUrl: './tweet-editor.component.css'
})
export class TweetEditorComponent implements OnInit {
  constructor(private tweetService: TweetService) { }

  newTweet: Tweet = {
    id: 0,
    name: this.tweetService.user.name,
    userName: this.tweetService.user.userName,
    tweetContent: '',
    timeAgo: new Date(),
    reacts: 0,
    likes: 0,
    retweets: 0,
    img: this.tweetService.user.img
  };
 
  ngOnInit(): void {
    
  }

  addTweet() {
    this.newTweet.id = this.tweetService.generateUniqueId();
    this.tweetService.addTweet(this.newTweet);
    this.newTweet = {
      id: 0,
      name: '',
      userName: '',
      tweetContent: '',
      timeAgo: new Date(),
      reacts: 0,
      likes: 0,
      retweets: 0,
      img: ''
    }
  }
}