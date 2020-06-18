import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
import { TypeMovies } from "../app/type-movies.component/type-movies.component";
import { MovieDetail } from "../app/movie-detail.component/movie-detail.component";

const routes: Routes = [
  { path: "list-movies/:type", component: TypeMovies },
  { path: "movies/:id", component: MovieDetail }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
