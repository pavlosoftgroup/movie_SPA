import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {Vote} from "./vote";

@Injectable()
export class VoteService {
    private url = 'http://localhost:3000/vote';

    constructor(private http: Http,) {
    }

    getAllVotes(movieId: string): Observable<Vote> {
        return this.http.get(this.url + '/' + movieId).map(this.generateVote);
    }

    generateVote(response: Response) {
        let res = response.json();

        let vote = {
                movieId: res[0].movieId,
                rating: res[0].rating,
            collVoters: res[0].collVoters,

            };
        // console.log(vote);
        return vote;


    }

}
