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
var MoviesService = (function () {
    // private apiKey = "&apikey=7c5a7c9a";
    // /https://api.themoviedb.org/3/movie/550?api_key=b4cb68303a91f7b393e47305973fe19e
    function MoviesService(http) {
        this.http = http;
        // private moviesUrl = 'http://www.omdbapi.com/?t=';
        this.moviesUrl = 'https://api.themoviedb.org/3/search/movie?api_key=b4cb68303a91f7b393e47305973fe19e&query=';
        this.oneMovieUrl = 'https://api.themoviedb.org/3/movie/';
        this.oneMovieUrl2 = '?api_key=b4cb68303a91f7b393e47305973fe19e';
    }
    // searchGet(search: string): Observable<Movie[]> {
    //     return this.http.get(this.moviesUrl + search + this.apiKey)
    //         .map(response => response.json().data as Movie[]);
    //
    //
    // }
    MoviesService.prototype.searchGet = function (search) {
        return this.http.get(this.moviesUrl + search)
            .map(function (resp) {
            // console.log(resp.json());
            var usersList = resp.json();
            var usersLists = usersList.results;
            console.log(usersList.results);
            var movies = [];
            for (var index in usersLists) {
                // console.log(usersLists[index]);
                var movie = usersLists[index];
                movies.push({
                    id: movie.id,
                    title: movie.original_title,
                    year: movie.release_date,
                    poster: movie.poster_path,
                    plot: movie.overview,
                });
            }
            // console.log(movies);
            return movies;
        });
        // .flatMap((response) => response.json())
        // .createMovie()
        // .map((person) => "Dr. " + person.name)
        // .subscribe((data) => {
        //   this.doctors.push(data);
        // }
        // );
    };
    MoviesService.prototype.getOneMovie = function (id) {
        return this.http.get(this.oneMovieUrl + id + this.oneMovieUrl2).map(this.extractMovie);
    };
    MoviesService.prototype.extractMovie = function (response) {
        var res = response.json();
        return {
            id: res.id,
            title: res.original_title,
            year: res.release_date,
            poster: res.poster_path,
            plot: res.overview,
            budget: res.budget,
            popularity: res.popularity,
        };
    };
    return MoviesService;
}());
MoviesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MoviesService);
exports.MoviesService = MoviesService;
//# sourceMappingURL=movies.service.js.map