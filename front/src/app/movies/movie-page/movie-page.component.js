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
var movies_service_1 = require("../movies.service");
var router_1 = require("@angular/router");
var MoviePageComponent = (function () {
    function MoviePageComponent(http, moviesService, activatedRoute) {
        this.http = http;
        this.moviesService = moviesService;
        this.activatedRoute = activatedRoute;
    }
    MoviePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            _this.id = +params['id'];
            _this.moviesService.getOneMovie(_this.id)
                .subscribe(function (result) { return _this.movie = result; });
        });
        // this.OneMovie()
    };
    return MoviePageComponent;
}());
MoviePageComponent = __decorate([
    core_1.Component({
        selector: 'app-movie-page',
        templateUrl: './movie-page.component.html',
        styleUrls: ['./movie-page.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http,
        movies_service_1.MoviesService,
        router_1.ActivatedRoute])
], MoviePageComponent);
exports.MoviePageComponent = MoviePageComponent;
//# sourceMappingURL=movie-page.component.js.map