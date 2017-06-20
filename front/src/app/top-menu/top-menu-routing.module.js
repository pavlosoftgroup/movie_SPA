"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var movies_component_1 = require("../movies/movies.component");
var movie_page_component_1 = require("../movies/movie-page/movie-page.component");
var home_component_1 = require("../home/home.component");
var user_routing_module_1 = require("../user/user-routing.module");
var info_page_component_1 = require("../pages/info-page/info-page.component");
var person_routing_module_1 = require("../person/person-routing.module");
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'info', component: info_page_component_1.InfoPageComponent },
    { path: 'user', component: home_component_1.HomeComponent },
    { path: 'movies', component: movies_component_1.MoviesComponent },
    { path: 'movie/:id', component: movie_page_component_1.MoviePageComponent },
];
var TopMenuRoutingModule = (function () {
    function TopMenuRoutingModule() {
    }
    return TopMenuRoutingModule;
}());
TopMenuRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            person_routing_module_1.PersonRoutingModule,
            user_routing_module_1.UserRoutingModule,
            router_1.RouterModule.forRoot(routes),
        ],
        exports: [router_1.RouterModule]
    })
], TopMenuRoutingModule);
exports.TopMenuRoutingModule = TopMenuRoutingModule;
//# sourceMappingURL=top-menu-routing.module.js.map