import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostListComponent } from './post/post-list.component';
import { PostShowComponent } from './post/post-show.component';
import { PostService } from './post/post.service';
import { HomepageComponent } from './homepage/homepage.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HomepageComponent,
    PostShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
