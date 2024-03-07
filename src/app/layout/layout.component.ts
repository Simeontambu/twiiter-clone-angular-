import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TweetEditorComponent } from '../tweet-editor/tweet-editor.component';
import { TweetsComponent } from '../tweets/tweets.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent,HttpClientModule, TweetEditorComponent, TweetsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  providers:[HttpClient]
})
export class LayoutComponent {

}
