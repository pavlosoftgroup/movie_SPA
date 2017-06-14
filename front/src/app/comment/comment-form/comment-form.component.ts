import {Component, EventEmitter, OnInit, Output} from '@angular/core';
// import any = jasmine.any;

@Component({
    selector: 'app-comment-form',
    templateUrl: './comment-form.component.html',
    styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
    @Output() newComment = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    addComment(event: any) {
        console.log(event);


    }

}
