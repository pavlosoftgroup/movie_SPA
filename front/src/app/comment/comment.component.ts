import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {CommentsService} from "./comments.service";
import {Comment} from "./comment";


@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
    commentsList: Comment[]=[];
    @Input() movieId: string;
    errorMessage: any;


    constructor(private activatedRoute: ActivatedRoute,
                private commentsService: CommentsService) {
    }

    ngOnInit() {
         this.activatedRoute.params.forEach((params: Params) => {
            this.movieId = params['id'];
             this.commentsService.getComments(this.movieId)
                .subscribe(
                comments => this.commentsList = comments,
                function () {console.log('ERROR')},
                function(){console.log(this.errorMessage)},
            );
            //     .subscribe(
            //         function(response: any) { console.log("Success Response" + response )},
            //         function(error: any) { console.log("Error happened" + error)},
            //         function() { console.log("the subscription is completed")}
            //     );


        })


    }


    newComment(comment: Comment) {
        console.log(comment);
        var leaderStr = JSON.stringify(comment);
        // comment = JSON.parse(leaderStr);


        this.commentsService.createComment(leaderStr)
            .subscribe(
                result => this.errorMessage = result,
                error => this.errorMessage = <any>error,

            );
        this.commentsList.push(comment)


    }



}
