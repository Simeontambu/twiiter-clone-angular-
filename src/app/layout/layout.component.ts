import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TweetEditorComponent } from '../tweet-editor/tweet-editor.component';
import { TweetsComponent } from '../tweets/tweets.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, TweetEditorComponent, TweetsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
