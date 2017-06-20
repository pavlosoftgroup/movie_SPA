import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {
    MaterialModule, MdCardHeader, MdCardModule, MdGridListModule, MdInputModule,
    MdListModule
} from '@angular/material';
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
import {CommentsService} from "./comment/comments.service";
import { VoteComponent } from './vote/vote.component';
import {VoteService} from "./vote/vote.service";
// import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { LoginFormComponent } from './user/login/login-form/login-form.component';
import { RegisterFormComponent } from './user/login/register-form/register-form.component';
import {UserModule} from "./user/user.module";
import {UserRoutingModule} from "./user/user-routing.module";
import {RestorePasswordComponent} from "./user/restore-password/restore-password.component";
import {UserComponent} from "./user/user.component";
import { PagesComponent } from './pages/pages.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { PersonComponent } from './person/person.component';
import {PersonModule} from "./person/person.module";

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
        VoteComponent,
        UserComponent,
        RestorePasswordComponent,
        LoginComponent,
        RegisterFormComponent,
        LoginFormComponent,
        PagesComponent,
        InfoPageComponent,
        PersonComponent,
        // TopMenuComponent,
        // UserComponent,

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        UserModule,
        PersonModule,
        FormsModule,
        // UserRoutingModule,
        HttpModule,
        MdToolbarModule,
        MdIconModule,
        MdInputModule,
        MdCardModule,
        RouterModule,
        TopMenuModule,
        TopMenuRoutingModule,
        HttpModule,
        JsonpModule,
        MdListModule,
        MdGridListModule,
        ReactiveFormsModule,
        // MdCardHeader,
        // UserRoutingModule

    ],
    providers: [MoviesService, CommentsService, VoteService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
