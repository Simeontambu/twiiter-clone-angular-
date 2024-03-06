import { Component } from '@angular/core';
import { TweetActionComponent } from '../tweet-action/tweet-action.component';

@Component({
  selector: 'app-tweets',
  standalone: true,
  imports: [TweetActionComponent],
  templateUrl: './tweets.component.html',
  styleUrl: './tweets.component.css'
})
export class TweetsComponent {

}
