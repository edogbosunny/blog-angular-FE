import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './component/posts/posts.component';
import { SinglePostComponent } from './component/single-post/single-post.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AddPostComponent } from './component/add-post/add-post.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'posts', component: PostsComponent },
  {path: 'add-post', component: AddPostComponent},
  { path: 'posts/:id', component: SinglePostComponent },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
