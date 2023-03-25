import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PostTweetComponent } from './post-tweet.component';

describe('PostTweetComponent', () => {
  let component: PostTweetComponent;
  let fixture: ComponentFixture<PostTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostTweetComponent],
      providers: [FormBuilder, { provide: Router, useValue: {} }],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
