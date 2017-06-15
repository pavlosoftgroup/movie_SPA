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
var router_1 = require("@angular/router");
var comments_service_1 = require("./comments.service");
var CommentComponent = (function () {
    function CommentComponent(activatedRoute, commentsService) {
        this.activatedRoute = activatedRoute;
        this.commentsService = commentsService;
        this.commentsList = [];
    }
    CommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            _this.movieId = params['id'];
            _this.commentsService.getComments(_this.movieId)
                .subscribe(function (comments) { return _this.commentsList = comments; }, function () { console.log('ERROR'); }, function () { console.log(this.errorMessage); });
            //     .subscribe(
            //         function(response: any) { console.log("Success Response" + response )},
            //         function(error: any) { console.log("Error happened" + error)},
            //         function() { console.log("the subscription is completed")}
            //     );
        });
    };
    CommentComponent.prototype.newComment = function (comment) {
        var _this = this;
        console.log(comment);
        var leaderStr = JSON.stringify(comment);
        // comment = JSON.parse(leaderStr);
        this.commentsService.createComment(leaderStr)
            .subscribe(function (result) { return _this.errorMessage = result; }, function (error) { return _this.errorMessage = error; });
        this.commentsList.push(comment);
    };
    return CommentComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CommentComponent.prototype, "movieId", void 0);
CommentComponent = __decorate([
    core_1.Component({
        selector: 'app-comment',
        templateUrl: './comment.component.html',
        styleUrls: ['./comment.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        comments_service_1.CommentsService])
], CommentComponent);
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=comment.component.js.map