import { Component } from "@angular/core";
import { PostModel } from "../../models/postModel";
import { PostService } from "../../services/post.service";
import { Router } from "@angular/router";
import { PostSendModel } from "../../models/postSendModel";
import { NgForm } from "@angular/forms";


@Component({  
    selector: 'newPost',
    templateUrl: "newPost.component.html",
    styles: ['.countries { width: 300px; }']
})

export class NewPostComponent {
    Title: string;
    Author: string;
    Description: string;
    
    postModel: PostModel[] ;
   

    constructor(private postService: PostService, private router: Router ) { }

    load(){
        this.postService.getAll().subscribe((data: PostModel[]) =>  this.postModel = data);
       
    }

    create( form: NgForm) {
        
        let post: PostSendModel = new PostSendModel(this.Title,this.Description ,this.Author );
        this.postService.post(post).subscribe(data => this.router.navigateByUrl("/"));
            
    }
}