import { Component, OnInit, Input } from '@angular/core';
import {Movie} from "../movie";
import {Http} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  @Input() movies : Movie[];


  constructor(private http: Http,
              private router: Router
  ) { }

  ngOnInit() {


  }
  chowMovie(id:string){
    this.router.navigate(['/movie',id])

  }

}
