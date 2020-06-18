import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Movie } from "../movie.model";
import { MoviesService } from "../../services/MoviesService";
import { EventMovieDetailService } from "../../services/EventMovieDetailService";

@Component({
  selector: "movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"]
})
export class MovieDetail {
  movie: Movie;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private moviesAPI: MoviesService,
    private eventMovieDetailService: EventMovieDetailService
  ) {}

  ngOnInit() {
    // vamos enviar um evento para remover a categoria de filme selecionada no componente app
    this.eventMovieDetailService.newEvent(undefined);

    this.route.params.subscribe(params => {
      this.id = params["id"];

      this.moviesAPI.getMovieDetail(this.id).subscribe(data => {
        console.log(data);
        this.movie = new Movie(
          data.id,
          data.title,
          "http://image.tmdb.org/t/p/w185/" + data.poster_path,
          data.release_date
        );
        this.movie.originalName = data.original_title;
        this.movie.sinopse = data.overview;
        this.movie.nota = data.vote_average;
        data.genres.forEach(item => {
          this.movie.generos.push(item.name);
        });
      });
    });
  }
}
