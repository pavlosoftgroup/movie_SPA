import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MoviesComponent} from "../movies/movies.component";
import {MoviePageComponent} from "../movies/movie-page/movie-page.component";
import {HomeComponent} from "../home/home.component";
import {UserRoutingModule} from "../user/user-routing.module";
import {InfoPageComponent} from "../pages/info-page/info-page.component";
import {PersonModule} from "../person/person.module";
import {PersonRoutingModule} from "../person/person-routing.module";

const routes: Routes = [
    {path: '',redirectTo: 'home',pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'info', component: InfoPageComponent},
    {path: 'user', component: HomeComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'movie/:id', component: MoviePageComponent},


];

@NgModule({
    imports: [
        PersonRoutingModule,
        UserRoutingModule,
        RouterModule.forRoot(routes),

    ],
    exports: [RouterModule]
})
export class TopMenuRoutingModule {
}
