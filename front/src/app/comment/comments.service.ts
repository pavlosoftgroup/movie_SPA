import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Comment} from "./comment";


@Injectable()
export class CommentsService {
    private url = "http://localhost:3000/comments";

    constructor(private http: Http) {
    }

    getComments(id: string): Observable<Comment[]> {
       let erty =  this.http.get(this.url+'/'+id).map(res => res.json());
        // .catch(this.handleError)
        console.log(erty);
        return erty;


    }
    createComment(comment: any): Observable<Comment> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers});

        let result =  this.http.post(this.url, {comment}, options)
            .map(this.extractOne);
        console.log(result);

        return result;

    }
    extractOne(res: Response){

        let response = res.json().data;
        let result =  new Comment(
            // response._id,
            response.movieId,
            response.autor,
            response.text,
            Number(response.date),
        )
        return result;
    }

    extractData(res: Response) {
        let response = res.json();
        let comments = [];
        console.log(response);


        for (var index of response) {
            let comment = new Comment(

                // response[index]._id,
                response[index].movieId,
                response[index].autor,
                response[index].text,
                response[index].date,
            )
            // console.log(response[index]);

        comments.push(comment);
        }


        return comments;


    }


}
