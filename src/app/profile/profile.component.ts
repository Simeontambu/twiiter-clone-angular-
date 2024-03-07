import { Component } from '@angular/core';
import { TweetsComponent } from '../tweets/tweets.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TweetsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
