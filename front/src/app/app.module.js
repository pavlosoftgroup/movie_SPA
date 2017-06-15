"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var material_2 = require("@angular/material");
var material_3 = require("@angular/material");
require("hammerjs");
var app_component_1 = require("./app.component");
var top_bar_component_1 = require("./top-bar/top-bar.component");
var home_component_1 = require("./home/home.component");
var movies_component_1 = require("./movies/movies.component");
var movie_page_component_1 = require("./movies/movie-page/movie-page.component");
var router_1 = require("@angular/router");
var top_menu_module_1 = require("./top-menu/top-menu.module");
var top_menu_routing_module_1 = require("./top-menu/top-menu-routing.module");
var search_movie_component_1 = require("./movies/search-movie/search-movie.component");
var movies_service_1 = require("./movies/movies.service");
var animations_1 = require("@angular/platform-browser/animations");
var movies_list_component_1 = require("./movies/movies-list/movies-list.component");
var comment_component_1 = require("./comment/comment.component");
var comment_form_component_1 = require("./comment/comment-form/comment-form.component");
var comment_list_component_1 = require("./comment/comment-list/comment-list.component");
var comments_service_1 = require("./comment/comments.service");
var vote_component_1 = require("./vote/vote.component");
var vote_service_1 = require("./vote/vote.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            top_bar_component_1.TopBarComponent,
            home_component_1.HomeComponent,
            movies_component_1.MoviesComponent,
            movie_page_component_1.MoviePageComponent,
            home_component_1.HomeComponent,
            movie_page_component_1.MoviePageComponent,
            movies_component_1.MoviesComponent,
            search_movie_component_1.SearchMovieComponent,
            movies_list_component_1.MoviesListComponent,
            comment_component_1.CommentComponent,
            comment_form_component_1.CommentFormComponent,
            comment_list_component_1.CommentListComponent,
            vote_component_1.VoteComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            material_2.MdToolbarModule,
            material_3.MdIconModule,
            material_1.MdInputModule,
            material_1.MdCardModule,
            router_1.RouterModule,
            top_menu_module_1.TopMenuModule,
            top_menu_routing_module_1.TopMenuRoutingModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            material_1.MdListModule,
            material_1.MdGridListModule
        ],
        providers: [movies_service_1.MoviesService, comments_service_1.CommentsService, vote_service_1.VoteService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map