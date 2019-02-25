import { Component, OnInit, ViewChild } from '@angular/core';
import { Posts } from '../../models/Posts';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  @ViewChild('userForm') form: any;
  posts: Posts;
  post: Posts = {
    title: '',
    content: ''
  };

  constructor(private postService: PostsService) {
    console.log(this.post);
  }

  ngOnInit() {
  }
  onSubmit(e) {
    const newData = e.form.value;
    this.postService.savePost(newData).subscribe((res) => {
      console.log(res);
    });
  }
}
