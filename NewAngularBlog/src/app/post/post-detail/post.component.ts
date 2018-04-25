import { Component, OnInit } from "@angular/core";
import { PostService } from "../../services/post.service";
import { CommentService } from "../../services/comment.service";
import { PostModel } from "../../models/postModel";

import { CommentSendModel } from "../../models/commentSendModel";

import { Comment } from "../../models/commentModel";
import { ActivatedRoute, Router } from "@angular/router";


 @Component({
    
       
    selector: 'post',
    templateUrl: "post.component.html",
    providers: [PostService,CommentService]
})

export class PostComponent implements OnInit {
    
        postModel: PostModel = new PostModel();
      
        author: string;
        commentText: string;

        commentlength:number;
    
        comments: Comment[] = new Array();

        postId: number;
        constructor(private activateRoute: ActivatedRoute, private postService: PostService, private commentService: CommentService,private router: Router) {
            this.postId = Number.parseInt(activateRoute.snapshot.params['postId']);
        }
    
        ngOnInit() {
           
           this.load();
           console.log(this.postModel.comment);
        }
    
        load(){
            this.postService.get(this.postId).subscribe((data: PostModel) => { this.postModel = data; this.comments = this.postModel.comment;
                 this.commentlength = this.postModel.comment.length; });
        }
      
            
        addComment() {
            let coment: CommentSendModel = new CommentSendModel(this.author, this.commentText, this.postModel.postId);
            this.commentService.addComment(coment).subscribe((data:PostModel) => this.load());
         
             this.author = null;
            this.commentText = null;               
           
        }
    
        delete(id: number) {
            this.commentService.delete(id).subscribe((data:PostModel) => this.load());
            
        }
    
    }