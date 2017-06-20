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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var comment_1 = require("./comment");
var CommentsService = (function () {
    function CommentsService(http) {
        this.http = http;
        this.url = "http://localhost:3002/comments";
    }
    CommentsService.prototype.getComments = function (id) {
        var erty = this.http.get(this.url + '/' + id).map(function (res) { return res.json(); });
        // .catch(this.handleError)
        return erty;
    };
    CommentsService.prototype.createComment = function (comment) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var result = this.http.post(this.url, { comment: comment }, options)
            .map(this.extractOne);
        console.log(result);
        return result;
    };
    CommentsService.prototype.extractOne = function (res) {
        var response = res.json().data;
        var date = new Date(+response.date);
        console.log(date);
        var result = new comment_1.Comment(
        // response._id,
        response.movieId, response.autor, response.text, response.date);
        return result;
    };
    CommentsService.prototype.extractData = function (res) {
        var response = res.json();
        var comments = [];
        console.log(response);
        for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
            var index = response_1[_i];
            var comment = new comment_1.Comment(
            // response[index]._id,
            response[index].movieId, response[index].autor, response[index].text, response[index].date);
            // console.log(response[index]);
            comments.push(comment);
        }
        return comments;
    };
    return CommentsService;
}());
CommentsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map