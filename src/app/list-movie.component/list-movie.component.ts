import { Component, Input } from "@angular/core";
import { Movie } from "../movie.model";
import { MovieCategory } from "../movieCategory.enum";
import { MoviesService } from "../../services/MoviesService";

@Component({
  selector: "list-movie",
  templateUrl: "./list-movie.component.html",
  styleUrls: ["./list-movie.component.css"]
})
export class ListMovie {
  @Input() filter: string;
  @Input() category: MovieCategory;
  @Input() quantityPages: number;
  oldCategory: MovieCategory;
  oldQuantityPages: number;
  listMovies: Movie[];
  movies: Movie[];

  constructor(private moviesAPI: MoviesService) {}

  ngOnChanges() {
    if (
      this.oldCategory !== this.category ||
      this.oldQuantityPages !== this.quantityPages
    )
      this.setListMove();
    else this.applyFilter();
  }

  setListMove = () => {
    this.listMovies = [];
    this.oldCategory = this.category;
    this.oldQuantityPages = this.quantityPages;
    console.log("Tipo de filme: " + this.category);
    for (let idxPage = 1; idxPage <= this.quantityPages; idxPage++)
      this.moviesAPI
        .getMovieCategory(this.category, idxPage)
        .subscribe(data => this.setMovies(data));
  };

  setMovies = data => {
    console.log("Results: " + data.results);
    data.results.forEach(element => {
      this.listMovies.push(
        new Movie(
          element.id,
          element.title,
          "http://image.tmdb.org/t/p/w185/" + element.poster_path,
          element.release_date
        )
      );
    });

    this.applyFilter();
    console.log("QT filmes: " + this.listMovies.length);
  };

  applyFilter = () => {
    if (this.listMovies) {
      this.movies = this.listMovies.filter(
        movie => movie.name.toLowerCase().search(this.filter.toLowerCase()) >= 0
      );
    }
  };
}
