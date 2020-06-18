import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component/app.component";
import { HeaderTitle } from "./header-title.component/header-title.component";
import { ListMovie } from "./list-movie.component/list-movie.component";
import { ListLength } from "./list-length.component/list-length.component";
import { Filter } from "./filter.component/filter.component";
import { MovieItem } from "./movie.component/movie.component";
import { MovieDetail } from "./movie-detail.component/movie-detail.component";
import { TypeMovies } from "./type-movies.component/type-movies.component";
import { SearchQuantity } from "./search-quantity.component/search-quantity.component";

import { AppRoutingModule } from "../modules/AppRoutingModule";
import { EventMovieDetailService } from "../services/EventMovieDetailService";

@NgModule({
  declarations: [
    AppComponent,
    HeaderTitle,
    Filter,
    ListMovie,
    ListLength,
    MovieItem,
    MovieDetail,
    TypeMovies,
    SearchQuantity
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [EventMovieDetailService],
  bootstrap: [AppComponent]
})
export class AppModule {}
