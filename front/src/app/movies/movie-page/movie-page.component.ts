import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Movie} from "../movie";
import {MoviesService} from "../movies.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
   movie : Movie;
   id: any;

  constructor(
      private http: Http,
      private moviesService: MoviesService,
      private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      this.id = + params['id'];
      this.moviesService.getOneMovie(this.id)
          .subscribe(result => this.movie = result);
    })
        // this.OneMovie()


  }
  OneMovie(id:string){


  }


}
