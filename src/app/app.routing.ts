import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post/post-list.component';
import { PostShowComponent } from './post/post-show.component';
import { HomepageComponent } from './homepage/homepage.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'posts',
    component: PostListComponent
  },
  {
    path: 'posts/:id',
    component: PostShowComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
