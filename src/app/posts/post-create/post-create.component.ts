import { Component,  OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  constructor(private postService: PostService) {}

  onAddPost(form: NgForm) {
    const { title, content } = form.value

    this.postService.addPost(title, content);

    form.resetForm();
  }
}
