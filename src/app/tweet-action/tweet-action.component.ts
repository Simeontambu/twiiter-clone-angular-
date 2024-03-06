import { Component, Input } from '@angular/core';
import { Tweet } from '../model/tweet.model';

@Component({
  selector: 'app-tweet-action',
  standalone: true,
  imports: [],
  templateUrl: './tweet-action.component.html',
  styleUrl: './tweet-action.component.css'
})
export class TweetActionComponent {
  @Input() tweets!:Tweet

}
