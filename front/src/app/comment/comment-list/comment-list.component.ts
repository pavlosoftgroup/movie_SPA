import { Component, OnInit, Input } from '@angular/core';
import {Comment} from "../comment";

@Component({
  selector: 'comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input('commentsList') commentsList:Comment[];

  constructor() { }

  ngOnInit() {
    console.log(this.commentsList);
  }

}
