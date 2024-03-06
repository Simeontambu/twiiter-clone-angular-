import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetEditorComponent } from './tweet-editor.component';

describe('TweetEditorComponent', () => {
  let component: TweetEditorComponent;
  let fixture: ComponentFixture<TweetEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TweetEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TweetEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
