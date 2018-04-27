import { Component, OnInit } from "@angular/core";
import { PostService } from "../../services/post.service";
import { PostModel } from "../../models/postModel";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { Subscription } from "rxjs/Subscription";
import { OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";




@Component({
    
    selector: 'allPost',
    templateUrl: "allPost.component.html",
    
  providers: [PostService, AuthService]
    
})
export class AllPostComponent implements OnInit, OnDestroy {

    postModel: PostModel[];
  commentlength: number;
  subscription: Subscription;
  role: string;

  constructor(private postService: PostService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.authService.roleNavStatus$.subscribe(status => this.role = status);
        this.load();      
    }

  ngOnDestroy() {

    this.subscription.unsubscribe();
  }

    load(){
        this.postService.getAll().subscribe((data: PostModel[]) =>  this.postModel = data);
       
    }
    

    dell(id: number) {
        
         this.postService.delete(id).subscribe((data :PostModel[])=> this.load());
        
     }
    
}

