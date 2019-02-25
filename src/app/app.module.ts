import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PostsComponent } from './component/posts/posts.component';
import { ContentPipe } from './pipe/content-pipe.pipe';
import { SinglePostComponent } from './component/single-post/single-post.component';
import { AddPostComponent } from './component/add-post/add-post.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    ContentPipe,
    SinglePostComponent,
    AddPostComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
