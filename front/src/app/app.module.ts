import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule, MdCardModule, MdInputModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import 'hammerjs';


import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {HomeComponent} from './home/home.component';
import {MoviesComponent} from './movies/movies.component';
import {MoviePageComponent} from './movies/movie-page/movie-page.component';
import {RouterModule} from "@angular/router";
import {TopMenuModule} from "./top-menu/top-menu.module";
import {TopMenuRoutingModule} from "./top-menu/top-menu-routing.module";
import {TopMenuComponent} from "./top-menu/top-menu.component";
import {SearchMovieComponent} from './movies/search-movie/search-movie.component';
import {MoviesService} from "./movies/movies.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { CommentComponent } from './comment/comment.component';
import { CommentFormComponent } from './comment/comment-form/comment-form.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';

@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        HomeComponent,
        MoviesComponent,
        MoviePageComponent,
        HomeComponent,
        MoviePageComponent,
        MoviesComponent,
        SearchMovieComponent,
        MoviesListComponent,
        CommentComponent,
        CommentFormComponent,
        CommentListComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        MdToolbarModule,
        MdIconModule,
        MdInputModule,
        MdCardModule,
        RouterModule,
        TopMenuModule,
        TopMenuRoutingModule,

    ],
    providers: [MoviesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
