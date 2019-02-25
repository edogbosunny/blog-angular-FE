import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../../models/Posts';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  post: Posts;

  constructor(private postService: PostsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe(post => {
      return this.post = post;
    });
  }
}
