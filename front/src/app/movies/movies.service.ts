import {Injectable} from '@angular/core';
import {Http, Response}          from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Movie} from "./movie";

@Injectable()
export class MoviesService {
    // private moviesUrl = 'http://www.omdbapi.com/?t=';
    private moviesUrl = 'https://api.themoviedb.org/3/search/movie?api_key=b4cb68303a91f7b393e47305973fe19e&query=';
    private oneMovieUrl = 'https://api.themoviedb.org/3/movie/';
    private oneMovieUrl2 = '?api_key=b4cb68303a91f7b393e47305973fe19e';
    movie: any;
    // private apiKey = "&apikey=7c5a7c9a";
// /https://api.themoviedb.org/3/movie/550?api_key=b4cb68303a91f7b393e47305973fe19e
    constructor(private http: Http) {
    }

    // searchGet(search: string): Observable<Movie[]> {
    //     return this.http.get(this.moviesUrl + search + this.apiKey)
    //         .map(response => response.json().data as Movie[]);
    //
    //
    // }

    searchGet(search: string): Observable<Movie[]> {
        return this.http.get(this.moviesUrl + search)
            .map((resp: Response) => {
                // console.log(resp.json());

                let usersList = resp.json();
                let usersLists = usersList.results;
                // console.log(usersList.results);

                let movies: Movie[] = [];
                for (let index in usersLists) {
                    // console.log(usersLists[index]);
                    let movie = usersLists[index];
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


    }

    getOneMovie(id: string): Observable<any> {
        return this.http.get(this.oneMovieUrl + id + this.oneMovieUrl2).map(this.extractMovie);


    }

    private extractMovie(response: Response) {
        const res = response.json();
        // console.log(res);
        return {
            id: res.id,
            title: res.original_title,
            year: res.release_date,
            poster: res.poster_path,
            plot: res.overview,
            budget: res.budget,
            popularity: res.popularity,
        }

    }

    // createMovie(resp:Response) {
    //     const moviesArr : Movie[];
    //     for(let index  in moviesArr)
    // }


}
