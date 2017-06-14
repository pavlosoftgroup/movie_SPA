import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MoviesComponent} from "../movies/movies.component";
import {MoviePageComponent} from "../movies/movie-page/movie-page.component";
import {HomeComponent} from "../home/home.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {path: 'home', component: HomeComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'movie/:id', component: MoviePageComponent},


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class TopMenuRoutingModule {
}
