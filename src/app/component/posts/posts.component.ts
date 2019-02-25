import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../../models/Posts';
import { PostsService } from '../../service/posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Posts[];
  post: Posts;
  currentPost: Posts = {
    // id: 0,
    title: '',
    content: '',
  };

  constructor(private postService: PostsService,
              private route: ActivatedRoute) {
    this.postService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe(post => {
      return this.post = post;
    });
  }
  removePost(post: Posts) {
    if (confirm('Are you sure?')) {
      this.postService.removePost(post.id).subscribe(() => {
        this.posts.forEach((cur, index) => {
          if (post.id === cur.id) {
            this.posts.splice(index, 1);
          }
        });
      });
    }
  }
}
