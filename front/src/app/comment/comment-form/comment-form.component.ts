import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Comment} from "../comment";
// import any = jasmine.any;

@Component({
    selector: 'app-comment-form',
    templateUrl: './comment-form.component.html',
    styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
    @Output() addComment = new EventEmitter<any>();
    @Input() movieId: string;


    constructor(private activatesRoute: ActivatedRoute) {
    }

    ngOnInit() {
        // console.log(this.movieId);
   }

    onSubmit(array: string[]) {


        let comment = new Comment(
            this.movieId,
            array[0],
            array[1],
            String(Date.now()),
        );


        this.addComment.emit(comment);



    }

}
