import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Posts } from '../models/Posts';

const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postUrl = 'https://nestjs-blog-backend.herokuapp.com/posts';
  // http injection
  constructor(private http: HttpClient) { }
  getPosts(): Observable<Posts[]> {
    // console.log(this.http.get<Posts[]>(this.postUrl));
    return this.http.get<Posts[]>(this.postUrl);
  }
  removePost(post: Posts | number): Observable<Posts> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postUrl}/${id}`;
    return this.http.delete<Posts>(url, httpOptions);
  }

  savePost(post: Posts): Observable<Posts> {
    return this.http.post<Posts>(this.postUrl, post, httpOptions);
  }

  getPost(id: number): Observable<Posts> {
    const url = `${this.postUrl}/${id}`;
    return this.http.get<Posts>(url);
  }
}
