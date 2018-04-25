import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AllPostComponent } from './post/allPosts/allPost.component';
import { PostComponent } from './post/post-detail/post.component';
import { NewPostComponent } from './post/newPost/newPost.component';
import { CommentService } from './services/comment.service';
import { PostService } from './services/post.service';
import { ConstHelperService } from './services/hostHelper.service';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './auth/registration/registration.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './services/auth.service';
import { HttpModule } from '@angular/http';




const appRoutes: Routes = [
  { path: '', component: AllPostComponent },
  { path: 'allPost', component: AllPostComponent },
  { path: "allPost/post/:postId", component: PostComponent },
  { path: 'post/:postId', component: PostComponent },
  { path: "newPost", component: NewPostComponent},
  { path: "registration", component: RegistrationComponent},
  {path: "login", component: LoginComponent}
  

];




@NgModule({
  declarations: [
    AppComponent,
    AllPostComponent,
    PostComponent,
    NewPostComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
     HttpModule,
     HttpClientModule,
     ReactiveFormsModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [

    CommentService,
    PostService,
    ConstHelperService ,
    UserService,
    AuthService,
     
  {provide: APP_BASE_HREF, useValue : '/' }

  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
