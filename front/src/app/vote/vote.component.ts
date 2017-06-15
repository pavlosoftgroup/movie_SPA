import {Component, OnInit, Input} from '@angular/core';
import {VoteService} from "./vote.service";
import {Vote} from "./vote";

@Component({
    selector: 'app-vote',
    templateUrl: './vote.component.html',
    styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
    @Input() movieId: string;
     voteRating: Vote;
     voteRatingInPage = {
         movieId:'155',
         rating:'4',
         collVoters:'34',
     };
     stars: Object[] = [];



    constructor(private voteService: VoteService,) {
    }

    ngOnInit() {
       this.voteService.getAllVotes(this.movieId).subscribe(res => this.voteRating = res);
            // console.log(aaa);
            console.log(this.voteRating);

        for(let i=1; i<6; i++){
            var status = 1 < +this.voteRating.rating ? 'star' : 'star_border';
            let star = {
                status: status,
                number: i,
            };
          this.stars.push(star);


        }

        // console.log(this.stars);


    }
    addStars(number: string ){
        var callVotersNow = +this.voteRating.collVoters+1;
       var ratingNow =  +this.voteRating.collVoters * +this.voteRating.rating + +number;
       ratingNow = ratingNow / callVotersNow;
       ratingNow = Math.round(ratingNow);

       let newVoteRating = new Vote(
           this.movieId,
          String(ratingNow),
           String(callVotersNow),


       );
        console.log(this.voteRating);

        console.log(newVoteRating);


    }


}
