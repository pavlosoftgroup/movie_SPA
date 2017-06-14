import {Component, OnInit, Input} from '@angular/core';
import {MoviesService} from "./movies.service";
import {Movie} from "./movie";

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    moviesList: Movie[];
    onSrch: any;

    constructor(private moviesService: MoviesService) {
    }


    ngOnInit(): void {
    // this.moviesList=
       this.moviesService.searchGet('dark').subscribe(data  => this.moviesList = data);
        console.log(this.moviesList);
    }

    onSearch(text: string): void {
      this.moviesService.searchGet(text).subscribe(data => this.moviesList = data);
      console.log(this.moviesList);


    }


}
