"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vote_service_1 = require("./vote.service");
var vote_1 = require("./vote");
var VoteComponent = (function () {
    function VoteComponent(voteService) {
        this.voteService = voteService;
        this.voteRatingInPage = {
            movieId: '155',
            rating: '4',
            collVoters: '34',
        };
        this.stars = [];
    }
    VoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.voteService.getAllVotes(this.movieId).subscribe(function (res) { return _this.voteRating = res; });
        // console.log(aaa);
        console.log(this.voteRating);
        for (var i = 1; i < 6; i++) {
            var status = 1 < +this.voteRating.rating ? 'star' : 'star_border';
            var star = {
                status: status,
                number: i,
            };
            this.stars.push(star);
        }
        // console.log(this.stars);
    };
    VoteComponent.prototype.addStars = function (number) {
        var callVotersNow = +this.voteRating.collVoters + 1;
        var ratingNow = +this.voteRating.collVoters * +this.voteRating.rating + +number;
        ratingNow = ratingNow / callVotersNow;
        ratingNow = Math.round(ratingNow);
        var newVoteRating = new vote_1.Vote(this.movieId, String(ratingNow), String(callVotersNow));
        console.log(this.voteRating);
        console.log(newVoteRating);
    };
    return VoteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], VoteComponent.prototype, "movieId", void 0);
VoteComponent = __decorate([
    core_1.Component({
        selector: 'app-vote',
        templateUrl: './vote.component.html',
        styleUrls: ['./vote.component.css']
    }),
    __metadata("design:paramtypes", [vote_service_1.VoteService])
], VoteComponent);
exports.VoteComponent = VoteComponent;
//# sourceMappingURL=vote.component.js.map