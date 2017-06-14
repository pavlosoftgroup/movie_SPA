import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-search-movie',
    templateUrl: './search-movie.component.html',
    styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
    // @Input() search: string;
    @Output() search = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

    searchMovies(search: string) {
        this.search.emit(search);
        // this.search = search;


    }

}
